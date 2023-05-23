import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlloyCrudCard } from '../crud.model';
import { AlloyInputTextIcon } from '../../../cell/input/input.model';
import { AbstractControl } from '@angular/forms';
import { AlloyCardAction } from '../../../tissue/card/card.model';
import { AlloyButtonIcon } from '../../../cell/button/button.model';
declare var window: any;
@Component({
  selector: 'alloy-crud-card',
  templateUrl: './crud-card.component.html',
  styleUrls: ['./crud-card.component.css']
})
export class CrudCardComponent {
  _crudCard: AlloyCrudCard;
  @Input() set crudCard(crudCard: AlloyCrudCard){
    this._crudCard = crudCard;
    this.createRow = [...this._crudCard.modal.fields]
  }

  modalForm: any;
  createRow: AlloyInputTextIcon[];
  addButton: AlloyButtonIcon;
  selectedRow: any;

  @Output() output: EventEmitter<AbstractControl<any,any>> = new EventEmitter<AbstractControl<any,any>>();

  constructor(){
    this._crudCard = new AlloyCrudCard();
    this.addButton = new AlloyButtonIcon({id:"addButton",name:"Add",type:"Button",className:"btn btn-outline-dark m-2",active:"",icon:{id:"icon1",icon:"faPlus",size:"lg",spin:false,className:""}});
    this.createRow = [];
  }

  onClicked(data: any){
    this._crudCard.modal.action = data.action;
    this._crudCard.modal.submit.name = data.action;
    if(data.action == "Add"){
      this._crudCard.modal.fields = this.createRow.map(c => new AlloyInputTextIcon(c));
    }else if(data.action == "Edit" || data.action == "Delete"){
      if(data.row){
        this.selectedRow = data.row;
        this._crudCard.modal.fields = this.getDataType(data.row).map(f => new AlloyInputTextIcon(f));
      }
    }
    this._crudCard.modal.data = {};
    this.modalForm = new window.bootstrap.Modal(
      document.getElementById(this._crudCard.modal.id)
    );
    this.modalForm.show();
  }

  getDataType(row: AlloyCardAction){
    let fields = [];
    row.fields.forEach(item=>{
      let metadata = this._crudCard.modal.fields.find(f=>f.name === item.id)
      if(metadata != undefined){
        metadata.text = item.name;
        fields.push(metadata);
      }
    });
    return fields;
  }

  //The input event will only trigger if there is a change
  //for delete the is no change so we have two step
  submitData(data) {
    this.modalForm.hide();
    if(data.action === 'Add'){
      this.output.emit(data);
    }else if(data.action === 'Edit'){
      if(Object.keys(data).length > 1){
        data["id"] = this.selectedRow.id;
        this.output.emit(data);
      }
    }else if(data.action === 'Delete'){
      data["action"]='Delete';
      data["id"] = this.selectedRow.id;
      this.output.emit(data);
    }
  }
}
