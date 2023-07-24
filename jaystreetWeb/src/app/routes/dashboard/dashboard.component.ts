import { Component, ViewChild, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DashboardComponent {
  showchild=false;
  click:any;
  showtable=false;
  products:any;
  ngOnInit():void{
   
    console.log(this.products);
  }
  asinsSubmit(){
this.showtable=true;
  }
  expend(){
    this.click=!this.click;
    if(this.click==true){
      this.showchild=true;
    }else{
      this.showchild=false;
    }

  }
}
