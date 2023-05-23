import { Component, Input } from '@angular/core';
import { AlloyIcon } from '../icon.model';

@Component({
  selector: 'alloy-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  _icon: AlloyIcon;
  @Input() set icon(icon: AlloyIcon) {
  	this._icon = icon;
  }

  constructor() { 
    this._icon = new AlloyIcon();
  }

}
