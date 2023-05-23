import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AlloyLinkLogo } from '../link.model';

@Component({
  selector: 'alloy-link-logo',
  templateUrl: './link-logo.component.html',
  styleUrls: ['./link-logo.component.css']
})
export class LinkLogoComponent {
  _linkLogo: AlloyLinkLogo;
  @Input() set linkLogo(linkLogo: AlloyLinkLogo){
    this._linkLogo = linkLogo;
  }

  @Output() output: EventEmitter<AlloyLinkLogo>= new EventEmitter<AlloyLinkLogo>();
  
  constructor(private router:Router) { 
    this._linkLogo = new AlloyLinkLogo();
  }


  //redirect on click
  redirectLink() {
    this.output.emit(this._linkLogo);
    if (this._linkLogo.link.includes("http") || this._linkLogo.link.includes("https")) {
      window.location.href = this._linkLogo.link;
      return true;
    }
    return this.router.navigateByUrl(this._linkLogo.link);
  }
}
