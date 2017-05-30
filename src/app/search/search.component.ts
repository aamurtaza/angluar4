import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	searchLocation = 'Finland'
	searchQuery: string;
	@Input()
	passedQuery: string;

  constructor(private router:Router) { }

  ngOnInit() {
  	// console.log(this.passedQuery)
  	if(this.passedQuery) {
  		this.searchQuery = this.passedQuery
  	}
  }

  submitSearch(event, formData) {
  	console.log(event)
  	console.log(formData.value)
  	let searchQuery = formData.value['q']
  	if (searchQuery) {
  		this.router.navigate(['/search', {q: searchQuery}])
  	}

  }

  searchQueryChange() {
  	this.searchLocation = 'helsinki'
  }

}
