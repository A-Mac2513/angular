import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlloyLink } from '../../../cell/link/link.model';
import { AlloyLinkBar } from '../bar.model';

@Component({
  selector: 'alloy-link-bar',
  templateUrl: './link-bar.component.html',
  styleUrls: ['./link-bar.component.css']
})
export class LinkBarComponent {
  _linkBar: AlloyLinkBar;
  @Input() set linkBar(linkBar: AlloyLinkBar){
    this._linkBar = linkBar;
  }
  @Output() output: EventEmitter<AlloyLink>= new EventEmitter<AlloyLink>();
  constructor() {
    this._linkBar = new AlloyLinkBar();
  }

  getSelected(tab: AlloyLink){
    this._linkBar.links.forEach(b => {
      if(b.id === tab.id){
        b.active = this._linkBar.selected;
      }else{
        b.active = '';
      }
    });
    this.output.emit(tab);
  }
}
