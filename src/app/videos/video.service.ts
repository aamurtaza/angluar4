import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const endpoint = 'assets/json/videos.json' // https://www.domain.com/api/videos/

@Injectable()
export class VideoService {

  constructor(private http:Http) { }

  list() {
  	 return this.http.get(endpoint)
  	 .map(response=>response.json())
  	 .catch(this.handleError)
  }

  private handleError(error: any, caught: any) :any {
  	console.log(error,caught)
  }
}
