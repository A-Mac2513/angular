import { Component, Input } from '@angular/core';
import { AlloyIcon } from '../../../cell/icon/icon.model';
import { AlloyNavBar } from '../navbar.model';

@Component({
  selector: 'alloy-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  _navBar: AlloyNavBar;
  toggleBars: AlloyIcon;
  @Input() set navBar(navBar: AlloyNavBar) {
  	this._navBar = navBar;
  }
  constructor(){
    this._navBar = new AlloyNavBar();
    this.toggleBars = new AlloyIcon({"id":"1","icon":"faBars","size":"lg","spin":false,"className":""});
  }
}
