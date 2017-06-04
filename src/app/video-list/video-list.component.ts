import { Component, OnInit, OnDestroy } from '@angular/core';

import { VideoItem } from '../videos/video';
import { VideoService } from '../videos/video.service';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [VideoService]
})
export class VideoListComponent implements OnInit, OnDestroy {
    private req: any;
    title:string = "Video List"
    videoList: [VideoItem];
  constructor(private _video: VideoService) {}

  ngOnInit() {
    this.req = this._video.list().subscribe(data=>{
      console.log(data)
      this.videoList = data as [VideoItem];
    })

  }

  ngOnDestroy(){
    this.req.unsubscribe()
  }
}
