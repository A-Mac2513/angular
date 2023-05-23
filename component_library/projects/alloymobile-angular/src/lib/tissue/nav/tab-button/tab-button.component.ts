import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlloyTabButton } from '../nav.model';
import { AlloyButtonIcon } from '../../../cell/button/button.model';

@Component({
  selector: 'alloy-tab-button',
  templateUrl: './tab-button.component.html',
  styleUrls: ['./tab-button.component.css']
})
export class TabButtonComponent {
  _tabButton: AlloyTabButton;
  @Input() set tabButton(_tabButton: AlloyTabButton){
    this._tabButton = _tabButton;
  }
  @Output() output: EventEmitter<AlloyButtonIcon> = new EventEmitter<AlloyButtonIcon>();

  constructor() {
    this._tabButton = new AlloyTabButton();
  }
//never make active as first class else can not find it.
  getSelected(tab: AlloyButtonIcon){
    this._tabButton.tabs.forEach(b => {
      if(b.id === tab.id){
        b.active = this._tabButton.selected;
      }else{
        b.active = '';
      }
    });
    this.output.emit(tab);
  }
}
