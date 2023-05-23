import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlloyButtonSubmit } from '../button.model';

@Component({
  selector: 'alloy-button-submit',
  templateUrl: './button-submit.component.html',
  styleUrls: ['./button-submit.component.css']
})
export class ButtonSubmitComponent {
  _buttonSubmit: AlloyButtonSubmit;
  @Input() set buttonSubmit(buttonSubmit: AlloyButtonSubmit){
    this._buttonSubmit = buttonSubmit;
  }
  @Output() output: EventEmitter<AlloyButtonSubmit>= new EventEmitter<AlloyButtonSubmit>();
  constructor() {
    this._buttonSubmit = new AlloyButtonSubmit();
  }
}
