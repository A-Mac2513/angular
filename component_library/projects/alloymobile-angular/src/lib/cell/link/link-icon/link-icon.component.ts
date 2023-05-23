import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AlloyLinkIcon } from '../link.model';

@Component({
  selector: 'alloy-link-icon',
  templateUrl: './link-icon.component.html',
  styleUrls: ['./link-icon.component.css']
})
export class LinkIconComponent {
  _linkIcon: AlloyLinkIcon;
  @Input() set linkIcon(linkIcon: AlloyLinkIcon){
    this._linkIcon = linkIcon;
  }

  @Output() output: EventEmitter<AlloyLinkIcon>= new EventEmitter<AlloyLinkIcon>();

  constructor(private router:Router) { 
    this._linkIcon = new AlloyLinkIcon();
  }
  //redirect on click
  redirectLink() {
    this.output.emit(this._linkIcon);
    if (this._linkIcon.link.includes("http") || this._linkIcon.link.includes("https")) {
      window.location.href = this._linkIcon.link;
      return true;
    }
    return this.router.navigateByUrl(this._linkIcon.link);
  }
}
