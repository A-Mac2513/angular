import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AlloyInputTextIcon, matchValidator } from '../../../cell/input/input.model';

@Component({
  selector: 'alloy-input-icon-texts',
  templateUrl: './input-icon-texts.component.html',
  styleUrls: ['./input-icon-texts.component.css']
})
export class InputIconTextsComponent {
  _inputIconTexts: AlloyInputTextIcon[];
  @Input() set inputIconTexts(inputIconTexts: AlloyInputTextIcon[]) {
  	this._inputIconTexts = inputIconTexts;
    this.inputForm = this.createData(this._inputIconTexts);
  }
  //reactive form for data input
  inputForm: FormGroup;
  errors: string[];
  match: boolean;

  @Output() output: EventEmitter<AbstractControl<any,any>> = new EventEmitter<AbstractControl<any,any>>();

  constructor() { 
    this._inputIconTexts = [];
    this.inputForm = new FormGroup({});
    this.errors = [];
    this.match = false;
  }

  // convenience getter for easy access to form fields
  get formControl() {
    return this.inputForm.controls;
  }

  //Used to create the form group
  createData(columns: AlloyInputTextIcon[]) {
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

  getError(inputField: AlloyInputTextIcon){
    this.getErrorMessage(inputField)
    return this.inputForm.get(inputField.name).errors;
  }

  getErrorMessage(inputField: AlloyInputTextIcon){
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

  selectedRadio(input){
    this.inputForm.get(input.name).patchValue(input.label);
    this.formOutput();
  }

  selectCheck(event,input){
    if(event.target.checked){
      this.inputForm.get(input.name).patchValue(input.label);
    }else{
      this.inputForm.get(input.name).patchValue("");
    }
    this.formOutput();
  }

  onFileChange(event,input) {
    if (event.target.files && event.target.files.length) {
      this.inputForm.get(input.name).patchValue(event.target.files);
      this.formOutput();
    }
  }
}
