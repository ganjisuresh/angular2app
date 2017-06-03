"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SampleComponent = (function () {
    function SampleComponent() {
        this.name = "Scott Desatnick";
        this.imageUrl = "http://lorempixel.com/400/200";
        this.realName = "Uma";
        this.showHeader = true; //put false to hide
        this.items = ["TV", "Fridge", "AC", "Car", "Wife", "Bike", "Job", "Money"];
        this.price = 150;
    }
    SampleComponent.prototype.runMe = function () {
        console.log('hey Wait !! did you click me?');
    };
    SampleComponent.prototype.getValues = function (anyevent) {
        console.log(anyevent.target.value);
    };
    return SampleComponent;
}());
SampleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sample',
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
        templateUrl: './sample.component.html'
    }),
    __metadata("design:paramtypes", [])
], SampleComponent);
exports.SampleComponent = SampleComponent;
//# sourceMappingURL=sample.component.js.map