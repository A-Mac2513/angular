import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { AlloyInputTextIcon } from '../input.model';

@Component({
  selector: 'alloy-input-icon-text-label',
  templateUrl: './input-icon-text-label.component.html',
  styleUrls: ['./input-icon-text-label.component.css']
})
export class InputIconTextLabelComponent {
  _inputIconTextLabel: AlloyInputTextIcon;
  @Input() set inputIconTextLabel(inputIconTextLabel: AlloyInputTextIcon) {
  	this._inputIconTextLabel = inputIconTextLabel;
    this.inputForm = this.createData(this._inputIconTextLabel);
  }
  //reactive form for data input
  inputForm: FormGroup;
  errors: string[];

  @Output() output: EventEmitter<AbstractControl<any,any>> = new EventEmitter<AbstractControl<any,any>>();

  constructor() { 
    this._inputIconTextLabel = new AlloyInputTextIcon();
    this.inputForm = new FormGroup({});
    this.errors = [];
  }

  //Used to create the form group
  createData(input: AlloyInputTextIcon) {
    this.inputForm = new FormGroup({});
    let group = {};
      Object.entries(input).forEach((column: any) => {
        if (column[0] === 'name') {
          group[column[1]] = new FormControl(input.text,input.validators); 
        }
      });
    return new FormGroup(group);
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

  formOutput(){
    let _output = this.inputForm.value;
    this.inputForm.status == "VALID" ? _output["error"] = false : _output["error"] = true;
    this.output.emit(this.inputForm.value);
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
