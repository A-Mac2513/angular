import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlloyButtonIcon } from '../../button/button.model';

@Component({
  selector: 'alloy-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent {
  _iconButton: AlloyButtonIcon;
  @Input() set iconButton(iconButton: AlloyButtonIcon){
    this._iconButton = iconButton;
  }
  @Output() output: EventEmitter<AlloyButtonIcon>= new EventEmitter<AlloyButtonIcon>();
  constructor() {
    this._iconButton = new AlloyButtonIcon();
  }
}
