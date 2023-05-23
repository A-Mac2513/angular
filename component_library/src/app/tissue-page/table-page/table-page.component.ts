import { Component } from '@angular/core';
import { Table } from 'alloymobile-angular';
import { TableAction } from 'projects/alloymobile-angular/src/public-api';
import TableDB from './table-page.data.json'

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent {
  table: TableAction ;
  constructor(){
    this.table = new TableAction(TableDB);
  }

  selectedRow(row){
    console.log(row);
  }
}
