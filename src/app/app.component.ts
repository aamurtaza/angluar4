import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<h1>{{title}}</h1><p> {{description}}! cool</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  description = 'some description';
  routeSub: any;
  query: string;

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
	this.routeSub = this.route.params.subscribe(params =>{
  		console.log(params)
  		this.query = params['q']
  	})
  }

  ngOnDestroy() {
  	this.routeSub.unsubscribe()
  }
}
