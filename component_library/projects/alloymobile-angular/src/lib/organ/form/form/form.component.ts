import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AlloyForm } from '../form.model';

@Component({
  selector: 'alloy-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  _form: AlloyForm;
  @Input() set form(_form: AlloyForm){
    this._form = _form;
  }
  @Output() output: EventEmitter<AbstractControl<any,any>> = new EventEmitter<AbstractControl<any,any>>();
  constructor() {
    this._form = new AlloyForm();
  }

  getText(text){
    text.error ? this._form.submit.disable = true : this._form.submit.disable = false;
    this._form.data = text;
  }

  submitData(action){
    this._form.submit.disable = true 
    this._form.submit.show = true;
    this._form.message = "";
    let data = {...this._form.data}
    data["action"]= action;
    this.output.emit(data);
  }
}
