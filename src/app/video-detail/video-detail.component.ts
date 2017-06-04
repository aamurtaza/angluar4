import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { VideoItem } from '../videos/video';
import { VideoService } from '../videos/video.service';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  providers: [VideoService]
})
export class VideoDetailComponent implements OnInit {
	private routeSub:any;
  private req:any;
  video: VideoItem;
	slug:String;

  constructor(private route:ActivatedRoute, private _videos:VideoService) { }

  ngOnInit() {
  		this.routeSub = this.route.params.subscribe(params => {
  			  this.slug = params['slug']
          this.req = this._videos.get(this.slug).subscribe(data => {
              this.video = data as VideoItem
          })
  		})
  }

  ngOnDestry() {
  		this.routeSub.unsubscribe()
      this.req.unsubscribe()
  }
  
  getEmbedUrl(item){
    return 'https://www.youtube.com/embed/' + item.embed + '?ecver=2'
  }
}
