import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AlloyLink } from '../link.model';

@Component({
  selector: 'alloy-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  _link: AlloyLink;
  @Input() set link(link: AlloyLink){
    this._link = link;
  }

  @Output() output: EventEmitter<AlloyLink>= new EventEmitter<AlloyLink>();

  constructor(private router:Router) { 
    this._link = new AlloyLink();
  }

  //redirect on click
  redirectLink() {
    this.output.emit(this._link);
    if (this._link.link.includes("http") || this._link.link.includes("https")) {
      window.location.href = this._link.link;
      return true;
    }
    return this.router.navigateByUrl(this._link.link);
  }
}
