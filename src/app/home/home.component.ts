import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router }  from '@angular/router'

import { VideoService } from '../videos/video.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [VideoService]
})
export class HomeComponent implements OnInit {
  private req: any
	homeListImages:[any] = [] as [any]

  constructor(private router:Router, private _videos:VideoService) { }

  ngOnInit() {
    this.req = this._videos.list().subscribe(data => {
      data.filter(item => {
          if(item.featured) {
              this.homeListImages.push(item)
          }
      })
    })
  }

  ngOnDestroy() {
    this.req.unsubscribe()
  }
  preventNormal(event:MouseEvent, image:any) {
  		if (!image.prevented) {
  			event.preventDefault()
  			this.router.navigate(['./videos']);
  		}
  }
}
