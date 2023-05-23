import { Component, Input } from '@angular/core';
import { AlloyNavBarLinkIcon } from '../navbar.model';
import { Router } from "@angular/router";
@Component({
  selector: 'alloy-navbar-link-icon',
  templateUrl: './navbar-link-icon.component.html',
  styleUrls: ['./navbar-link-icon.component.css']
})
export class NavbarLinkIconComponent {
  _navBarLinkIcon: AlloyNavBarLinkIcon;
  @Input() set navBarLinkIcon(_navBarLinkIcon: AlloyNavBarLinkIcon) {
  	this._navBarLinkIcon = _navBarLinkIcon;
  }
  constructor(private router: Router){
    this._navBarLinkIcon = new AlloyNavBarLinkIcon();
  }
}
