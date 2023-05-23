import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableAction } from '../table.model';

@Component({
  selector: 'alloy-table-action',
  templateUrl: './table-action.component.html',
  styleUrls: ['./table-action.component.css']
})
export class TableActionComponent {
  _tableAction: TableAction;
  @Input() set tableAction(tableAction: TableAction){
    this._tableAction = tableAction;
  }
  @Output() output: EventEmitter<any>= new EventEmitter<any>();

  constructor() {
    this._tableAction = new TableAction();
  }

  getAction(action,row){
    let data = {row:{},action:{}};
    data.row = row;
    data.action = action;
    this.output.emit(data);
  }

  capitalize(s) {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

}
