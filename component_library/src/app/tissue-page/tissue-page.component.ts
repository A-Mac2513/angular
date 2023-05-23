import { Component } from '@angular/core';
import { AlloyIcon, AlloyIconSideBar } from 'alloymobile-angular';
import TissueDB from './tissue-page.data.json';
@Component({
  selector: 'app-tissue-page',
  templateUrl: './tissue-page.component.html',
  styleUrls: ['./tissue-page.component.css']
})
export class TissuePageComponent {
  sideBar: AlloyIconSideBar;
  toggleIcon: AlloyIcon;
  constructor(){
    this.sideBar = new AlloyIconSideBar(TissueDB.sidebar); 
    this.toggleIcon = new AlloyIcon({id:1,icon:"faBars",size:"lg",spin:false,className:"btn btn-outline-dark border-0"});
  }
}
