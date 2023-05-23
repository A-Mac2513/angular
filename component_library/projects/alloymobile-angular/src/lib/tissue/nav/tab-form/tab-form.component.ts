import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlloyTabForm } from '../nav.model';
import { AlloyButtonIcon } from '../../../cell/button/button.model';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'alloy-tab-form',
  templateUrl: './tab-form.component.html',
  styleUrls: ['./tab-form.component.css']
})
export class TabFormComponent {
  _tabForm: AlloyTabForm;
  @Input() set tabForm(_tabForm: AlloyTabForm){
    this._tabForm = _tabForm;
  }
  @Output() output: EventEmitter<AbstractControl<any,any>> = new EventEmitter<AbstractControl<any,any>>();

  constructor() {
    this._tabForm = new AlloyTabForm();
  }
//never make active as first class else can not find it.
  getSelected(tab: AlloyButtonIcon){
    this._tabForm.tabs.forEach(b => {
      if(b.id === tab.id){
        b.active = this._tabForm.selected;
      }else{
        b.active = '';
      }
    });
  }

  getText(text){
    this._tabForm.data = text;
  }

  submitData(action){
    this._tabForm.message = "";
    let data = {...this._tabForm.data}
    data["action"]= action;
    this.output.emit(data);
  }
}
