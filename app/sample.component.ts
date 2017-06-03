import{Component} from '@angular/core';

@Component({
      moduleId:module.id,
	selector : 'sample',
	/*template : ` <div class="container" *ngIf="showHeader">
	             <h1>this is my sample page</h1>
                  <br>
                  He is  {{name | uppercase}}
                  <img bind-src="imageUrl"/><br><br>
                  <input type="text" (keydown.enter)="getValues($event)" /><br>
                  <button class="btn btn-primary" (click)="runMe()">Click Me!!!</button>
                  <br><br>
                  <input type="text" [(ngModel)]="realName" (keyup.enter)="getValues($event)" />{{realName}}
                  <br> 
                  <ul *ngFor="let item of items">
                  <li>{{item}}</li>
                  </ul>
                  <br>Display Beer Price is   {{price | currency:'USD':'true'}}
                  </div>

	              `*/
          templateUrl :'./sample.component.html'
})
 export class SampleComponent{
 	private name : string;
 	private imageUrl :string;
 	private realName :string;
 	private showHeader : boolean;
       private items:string[];
       private price:number;
 	constructor(){
 		this.name="Scott Desatnick"
 		this.imageUrl="http://lorempixel.com/400/200"
 		this.realName="Uma";
 		this.showHeader=true  //put false to hide
             this.items=["TV","Fridge","AC","Car","Wife","Bike","Job","Money"];
             this.price=150
 	}
 	runMe(){
 		console.log('hey Wait !! did you click me?')
 	}
 	getValues(anyevent :any){
 		console.log(anyevent.target.value)

 	}

 }