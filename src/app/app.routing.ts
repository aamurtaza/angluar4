// https://angular.io/docs/ts/latest/guide/router.html README
import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';

import { HomeComponent } from './home/home.component'
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';

const appRoutes: Routes = [
	{
		path:"", 
		component: HomeComponent,
 	},
	{
		path:"videos", 
		component: VideoListComponent,
 	},
 	{
		path:"search", 
		component: SearchDetailComponent,
 	},
 	{
		path:"videos/:slug", 
		component: VideoDetailComponent,
 	}
]

@NgModule({
	imports: [
		RouterModule.forRoot(
				appRoutes
		)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule{}
