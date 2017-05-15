import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute }from '@angular/router';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
	private routeSub:any;
	slug:String;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  		this.routeSub = this.route.params.subscribe(params => {
  			console.log(params)
  			this.slug = params['slug']
  		})
  }

  ngOnDestry() {
  		this.routeSub.unsubscribe()
  }

}
