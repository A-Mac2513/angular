import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl} from '@angular/forms';
import { Forget } from '../forget.model';

@Component({
  selector: 'alloy-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {
  _forget: Forget;

  @Input() set forget(forget: Forget){
    this._forget = forget;
  };

  @Output() output: EventEmitter<AbstractControl<any,any>> = new EventEmitter<AbstractControl<any,any>>();

  constructor() {
    this._forget = new Forget();
  }
}
