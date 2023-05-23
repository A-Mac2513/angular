import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { AlloyInputTextIcon } from '../input.model';

@Component({
  selector: 'alloy-input-text-icon-label',
  templateUrl: './input-text-icon-label.component.html',
  styleUrls: ['./input-text-icon-label.component.css']
})
export class InputTextIconLabelComponent {
  _inputTextIconLabel: AlloyInputTextIcon;
  @Input() set inputTextIconLabel(inputTextIconLabel: AlloyInputTextIcon) {
  	this._inputTextIconLabel = inputTextIconLabel;
    this.inputForm = this.createData(this._inputTextIconLabel);
  }
  //reactive form for data input
  inputForm: FormGroup;

  @Output() output: EventEmitter<AbstractControl<any,any>> = new EventEmitter<AbstractControl<any,any>>();

  constructor() { 
    this._inputTextIconLabel = new AlloyInputTextIcon();
    this.inputForm = new FormGroup({});
  }

  //Used to create the form group
  createData(data: AlloyInputTextIcon) {
    this.inputForm = new FormGroup({});
    let group = {};
    Object.entries(data).forEach((column: any) => {
      if (column[0] === 'name') {
        group[column[1]] = new FormControl(data.text); 
      }
    });
    return new FormGroup(group);
  }
}
