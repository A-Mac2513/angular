import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { AlloyInputText, matchValidator } from '../../../cell/input/input.model';

@Component({
  selector: 'alloy-input-floating-texts',
  templateUrl: './input-floating-texts.component.html',
  styleUrls: ['./input-floating-texts.component.css']
})
export class InputFloatingTextsComponent {
  _inputFloatingTexts: AlloyInputText[];
  @Input() set inputFloatingTexts(inputFloatingTexts: AlloyInputText[]) {
  	this._inputFloatingTexts = inputFloatingTexts;
    this.inputForm = this.createData(this._inputFloatingTexts);
  }
  //reactive form for data input
  inputForm: FormGroup;
  errors: string[];
  match: boolean;

  @Output() output: EventEmitter<AbstractControl<any,any>> = new EventEmitter<AbstractControl<any,any>>();

  constructor() { 
    this._inputFloatingTexts = [];
    this.inputForm = new FormGroup({});
    this.errors = [];
    this.match = false;
  }

  // convenience getter for easy access to form fields
  get formControl() {
    return this.inputForm.controls;
  }

  //Used to create the form group
  createData(columns: AlloyInputText[]) {
    this.inputForm = new FormGroup({});
    let group = {};
    columns.forEach(record=>{
      Object.entries(record).forEach((column: any) => {
        if (column[0] === 'name') {
          group[column[1]] = new FormControl(record.text,record.validators); 
        }
        if(column[0] === 'match'){
          this.match = column[1];
        }
      });
    });
    if(this.match){
      return new FormGroup(group,{validators: matchValidator});
    }
    return new FormGroup(group);
  }

  formOutput(){
    let _output = this.inputForm.value;
    this.inputForm.status == "VALID" ? _output["error"] = false : _output["error"] = true;
    this.output.emit(this.inputForm.value);
  }

  getError(inputField: AlloyInputText){
    this.getErrorMessage(inputField)
    return this.inputForm.get(inputField.name).errors;
  }

  getErrorMessage(inputField: AlloyInputText){
    this.errors = [];
    if(this.inputForm.get(inputField.name).errors != undefined){
      Object.entries(this.inputForm.get(inputField.name).errors).forEach((row: any) => {
        if(inputField.errors != undefined){
          let errorMessasge = inputField.errors.find(msg => msg.name.toLocaleLowerCase() === row[0].toLocaleLowerCase());
          if(errorMessasge != undefined){
            this.errors.push(errorMessasge.message);
          }
        }
      });
    }
  }

  getTouched(name){
    return this.inputForm.get(name).touched;
  }
}
