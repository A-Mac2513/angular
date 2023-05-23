import { Component } from '@angular/core';
import { AlloyIcon, AlloyIconSideBar } from 'alloymobile-angular';
import OrganDB from './organ-page.data.json';
@Component({
  selector: 'app-organ-page',
  templateUrl: './organ-page.component.html',
  styleUrls: ['./organ-page.component.css']
})
export class OrganPageComponent {
  sideBar: AlloyIconSideBar;
  toggleIcon: AlloyIcon;
  constructor(){
    this.sideBar = new AlloyIconSideBar(OrganDB.sidebar); 
    this.toggleIcon = new AlloyIcon({id:1,icon:"faBars",size:"lg",spin:false,className:"btn btn-outline-dark border-0"});
  }
}
