import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  	routeSub: any
  	query: String;
  ngOnInit() {
  	this.routeSub = this.route.params.subscribe(params =>{
  		console.log(params)
  		this.query = params['q']
  	})
  }

  ngOnDestroy(){
  	this.routeSub.unsubscribe()
  }

}
