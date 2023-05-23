import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlloyInputTextIcon } from '../../../cell/input/input.model';
import { AlloyIcon } from '../../../cell/icon/icon.model';
import { AbstractControl } from '@angular/forms';
import { AlloyCrudTable } from '../crud.model';
declare var window: any;

@Component({
  selector: 'alloy-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent {

  _crudTable: AlloyCrudTable;
  @Input() set crudTable(crudTable: AlloyCrudTable){
    this._crudTable = crudTable;
    this.createRow = [...this._crudTable.modal.fields]
  }
  modalForm: any;
  createRow: AlloyInputTextIcon[];
  addIcon: AlloyIcon;
  search: AlloyInputTextIcon;
  selectedRow: any;
  @Output() output: EventEmitter<AbstractControl<any,any>> = new EventEmitter<AbstractControl<any,any>>();

  constructor() {
    this._crudTable = new AlloyCrudTable();
    this.search = new AlloyInputTextIcon({id:"1",name:"search",className:"input-group border border-dark rounded-pill",type:"search",placeholder:"john@example.com",readonly:false,label:"Search..",icon:{id:1,icon:"faSearch",size:"lg",spin:false,className:""}});
    this.addIcon = new AlloyIcon({id:1,icon:"faPlus",size:"lg",spin:false,className:""});
    this.createRow = [];
  }

  onClicked(data: any){
    this._crudTable.modal.action = data.action;
    this._crudTable.modal.submit.name = data.action;
    if(data.action == "Add"){
      this._crudTable.modal.fields = this.createRow.map(c => new AlloyInputTextIcon(c));
    }else if(data.action == "Edit" || data.action == "Delete"){
      if(data.row){
        this.selectedRow = data.row;
        this._crudTable.modal.fields = this.getDataType(data.row).map(f => new AlloyInputTextIcon(f));
      }
    }
    this._crudTable.modal.data = {};
    this.modalForm = new window.bootstrap.Modal(
      document.getElementById(this._crudTable.modal.id)
    );
    this.modalForm.show();
  }

  getDataType(row){
    let fields = [];
    Object.entries(row).forEach(column=>{
      let metadata = this._crudTable.modal.fields.find(f=>f.name === column[0])
      if(metadata != undefined){
        metadata.text = column[1].toString();
        fields.push(metadata);
      }
    });
    return fields;
  }

  capitalize(s) {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  //The input event will only trigger if there is a change
  //for delete the is no change so we have two step
  submitData(data) {
    this.modalForm.hide();
    if(data.action === 'Add' || data.action === 'Edit' ){
      if(Object.keys(data).length > 1){
        this.output.emit(data);
      }
    }else if(data.action === 'Delete'){
      let data = {...this.selectedRow}
      data["action"]='Delete';
      this.output.emit(data);
    }
  }

  getSearch(text){
    let data = {...text}
    data["action"]="Search";
    this.output.emit(data);
  }
}
