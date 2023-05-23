import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlloyIconSideBar } from '../nav.model';
import { AlloyLinkIcon } from '../../../cell/link/link.model';


@Component({
  selector: 'alloy-icon-sidebar',
  templateUrl: './icon-sidebar.component.html',
  styleUrls: ['./icon-sidebar.component.css']
})
export class IconSidebarComponent {
  _iconSideBar: AlloyIconSideBar;
  @Input() set iconSideBar(iconSideBar: AlloyIconSideBar) {
  	this._iconSideBar = iconSideBar;
  }
  @Output() output: EventEmitter<AlloyLinkIcon> = new EventEmitter<AlloyLinkIcon>();
  constructor() { 
    this._iconSideBar = new AlloyIconSideBar();
  }

  getSelected(tab: AlloyLinkIcon){
    this._iconSideBar.linkIcon.forEach(t => {
      if(t.id === tab.id){
        t.active = this._iconSideBar.selected;
      }else{
        t.active = '';
      }
    });
    this.output.emit(tab);
  }
}
