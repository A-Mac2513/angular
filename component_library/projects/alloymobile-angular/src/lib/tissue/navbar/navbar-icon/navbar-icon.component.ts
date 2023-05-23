import { Component, Input } from '@angular/core';
import { AlloyIcon } from '../../../cell/icon/icon.model';
import { AlloyLinkIcon } from '../../../cell/link/link.model';
import { AlloyNavBarIcon } from '../navbar.model';

@Component({
  selector: 'alloy-navbar-icon',
  templateUrl: './navbar-icon.component.html',
  styleUrls: ['./navbar-icon.component.css']
})
export class NavbarIconComponent {
  _navBarIcon: AlloyNavBarIcon;
  @Input() set navBarIcon(navBarIcon: AlloyNavBarIcon) {
  	this._navBarIcon = navBarIcon;
  }
  constructor(){
    this._navBarIcon = new AlloyNavBarIcon();
  }
}
