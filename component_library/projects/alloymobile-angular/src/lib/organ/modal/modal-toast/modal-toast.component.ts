import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlloyModalToast } from '../modal.model';

@Component({
  selector: 'alloy-modal-toast',
  templateUrl: './modal-toast.component.html',
  styleUrls: ['./modal-toast.component.css']
})
export class ModalToastComponent {
  _modalToast: AlloyModalToast;
  @Input() set modalToast(modalToast: AlloyModalToast){
    this._modalToast = modalToast;
  }
  @Output() output: EventEmitter<String>= new EventEmitter<String>();
  constructor() {
    this._modalToast = new AlloyModalToast();
  }
}
