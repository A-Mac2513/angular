import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AlloyModal } from '../modal.model';

@Component({
  selector: 'alloy-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  _modal: AlloyModal;
  @Input() set modal(modal: AlloyModal){
    this._modal = modal;
  }
  @Output() output: EventEmitter<AbstractControl<any,any>> = new EventEmitter<AbstractControl<any,any>>();
  constructor() {
    this._modal = new AlloyModal();
  }

  getText(text){
    this._modal.data = text;
  }

  submitData(action){
    let data = {...this._modal.data}
    data["action"]= action;
    this.output.emit(data);
  }
}
