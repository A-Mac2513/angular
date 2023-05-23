import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlloyTabLink } from '../nav.model';
import { AlloyLinkIcon } from '../../../cell/link/link.model';

@Component({
  selector: 'alloy-tab-link',
  templateUrl: './tab-link.component.html',
  styleUrls: ['./tab-link.component.css']
})
export class TabLinkComponent {
  _tabLink: AlloyTabLink;
  @Input() set tabLink(_tabLink: AlloyTabLink){
    this._tabLink = _tabLink;
  }
  @Output() output: EventEmitter<AlloyLinkIcon> = new EventEmitter<AlloyLinkIcon>();

  constructor() {
    this._tabLink = new AlloyTabLink();
  }

  getSelected(tab: AlloyLinkIcon){
    this._tabLink.tabs.forEach(t => {
      if(t.id === tab.id){
        t.active = this._tabLink.selected;
      }else{
        t.active = '';
      }
    });
    this.output.emit(tab);
  }
}
