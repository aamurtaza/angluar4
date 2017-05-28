import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router }  from '@angular/router'
import { Http } from '@angular/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private req: any
	homeListImages = [
		// {image: "assets/images/nature/4.jpg", name:"Image 4", slug: "videos-1"},
		// {image: "assets/images/nature/5.jpg", name:"Image 5", slug: "videos-1"},
		// {image: "assets/images/nature/6.jpg", name:"Image 6", slug: "videos-1"},	
	]

  constructor(private http:Http, private router:Router) { }

  ngOnInit() {
    this.req = this.http.get('assets/json/videos.json').subscribe(data => {
      // console.log(data.json())
      data.json().filter(item => {
          if(item.featured) {
              this.homeListImages.push(item)
          }
      })
      // this.homeListImages = data.json()
    })
  }

  ngOnDestroy() {
    this.req.unsubscribe()
  }
  preventNormal(event:MouseEvent, image:any) {
  		if (!image.prevented) {
  			event.preventDefault()
  			this.router.navigate(['./videos']);

  			// image.link = "/videos"
  			// image.prevented = true;

  			// image.setAttribute("href", "/videos")
  			
  			// console.log(image.getAttribute('href'))
  			// alert("Working...")	
  		}
  		
  }
}
