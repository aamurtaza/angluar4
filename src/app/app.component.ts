import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  routeSub: any;
  query: string;

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
	this.routeSub = this.route.params.subscribe(params =>{
  		this.query = params['q']
  	})
  }

  ngOnDestroy() {
  	this.routeSub.unsubscribe()
  }
}
