import { Component, Input } from '@angular/core';
import { AlloySideBar } from '../nav.model';

@Component({
  selector: 'alloy-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  _sideBar: AlloySideBar;
  @Input() set sideBar(sideBar: AlloySideBar) {
  	this._sideBar = sideBar;
  }
  constructor() { 
    this._sideBar = new AlloySideBar();
  }
}
