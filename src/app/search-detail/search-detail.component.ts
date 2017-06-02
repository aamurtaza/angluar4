import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { VideoService } from '../videos/video.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css'],
  providers: [VideoService],
})
export class SearchDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private _videos:VideoService) { }
  	routeSub: any
    req:any
  	query: String;
    videoList: [any];

  ngOnInit() {
  	this.routeSub = this.route.params.subscribe(params =>{
  		console.log(params)
  		this.query = params['q']
      this.req = this._videos.search(this.query).subscribe(data => {
              this.videoList = data as any;
      })
  	})
  }

  ngOnDestroy(){
  	this.routeSub.unsubscribe()
    this.req.unsubscribe()
  }

  getEmbedUrl(item){
    return 'https://www.youtube.com/embed/' + item.embed + '?ecver=2'
  }
}
