import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlloyButton } from '../button.model';

@Component({
  selector: 'alloy-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  _button: AlloyButton;
  @Input() set button(button: AlloyButton){
    this._button = button;
  }
  @Output() output: EventEmitter<AlloyButton>= new EventEmitter<AlloyButton>();
  constructor() {
    this._button = new AlloyButton();
  }
}
