import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AlloyLinkIcon } from '../../link/link.model';


@Component({
  selector: 'alloy-icon-link',
  templateUrl: './icon-link.component.html',
  styleUrls: ['./icon-link.component.css']
})
export class IconLinkComponent {
  _iconLink: AlloyLinkIcon;
  @Input() set iconLink(iconLink: AlloyLinkIcon){
    this._iconLink = iconLink;
  }

  @Output() output: EventEmitter<AlloyLinkIcon>= new EventEmitter<AlloyLinkIcon>();

  constructor(private router:Router) { 
    this._iconLink = new AlloyLinkIcon();
  }
  //redirect on click
  redirectLink() {
    this.output.emit(this._iconLink);
    if (this._iconLink.link.includes("http") || this._iconLink.link.includes("https")) {
      window.location.href = this._iconLink.link;
      return true;
    }
    return this.router.navigateByUrl(this._iconLink.link);
  }
}
