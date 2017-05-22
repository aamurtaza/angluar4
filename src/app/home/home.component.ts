import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	homeListImages = [
		{image: "assets/images/nature/4.jpg", title:"Image 4", link: "/videos/videos-1"},
		{image: "assets/images/nature/5.jpg", title:"Image 5", link: "/videos/videos-1"},
		{image: "assets/images/nature/6.jpg", title:"Image 6", link: "/videos/videos-1"},	
	]

  constructor(private router:Router) { }

  ngOnInit() {
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
