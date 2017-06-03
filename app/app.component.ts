import {Component} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {SampleCompon} from './sample.component'
@Component({
   selector: "my-app",
   template:` 
   <div *ngIf="hide">
   <h1>My Angular App 2</h1>
   <my-home></my-home>
   <about></about>
   <sample></sample>
    <div>  `

})
export class AppComponent{
	private hide:boolean;
	constructor(){
		this.hide=true; //put false to hide
	}
	
}