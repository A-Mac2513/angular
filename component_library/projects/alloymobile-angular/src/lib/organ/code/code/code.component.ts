import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl} from '@angular/forms';
import { Code } from '../code.model';

@Component({
  selector: 'alloy-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent {
  _code: Code;
  @Input() set code(code: Code){
    this._code = code;
  };

  @Output() output: EventEmitter<AbstractControl<any,any>> = new EventEmitter<AbstractControl<any,any>>();

  constructor() {
    this._code = new Code();
  }

  resendCode(){
    let _output: any = {};
    _output["resend"] = true;
    this.output.emit(_output);
  }
}
