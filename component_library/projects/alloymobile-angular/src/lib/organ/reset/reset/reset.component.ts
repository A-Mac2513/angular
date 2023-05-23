import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl} from '@angular/forms';
import { Reset } from '../reset.model';

@Component({
  selector: 'alloy-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {
  _reset: Reset;

  @Input() set reset(reset: Reset){
    this._reset = reset;
  };

  @Output() output: EventEmitter<AbstractControl<any,any>> = new EventEmitter<AbstractControl<any,any>>();

  constructor() {
    this._reset = new Reset();
  }
}
