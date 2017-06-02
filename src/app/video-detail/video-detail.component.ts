import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

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
  video: any;
	slug:String;

  constructor(private route:ActivatedRoute, private http:Http, private _videos:VideoService) { }

  ngOnInit() {
  		this.routeSub = this.route.params.subscribe(params => {
  			console.log(params)
  			this.slug = params['slug']
        this.req = this._videos.list().subscribe(data => {
            data.filter(item => {
                if (item.slug == this.slug) {
                  console.log(item)
                  this.video = item
                }
            })
        })
  		})
  }

  ngOnDestry() {
  		this.routeSub.unsubscribe()
      this.req.unsubscribe()
  }

}
