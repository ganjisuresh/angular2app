import {Component} from '@angular/core';

@Component({
	moduleId :module.id,
	selector :'about',
	templateUrl :'./about.component.html'
})
export class AboutComponent{

	private message :string;
	constructor(){
		this.message="I Am From about and Constructor"
	}

}