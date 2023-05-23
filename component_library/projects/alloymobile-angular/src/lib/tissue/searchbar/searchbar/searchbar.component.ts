import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AlloyButtonIcon } from '../../../cell/button/button.model';
import { AlloyInputTextIcon } from '../../../cell/input/input.model';
import { AlloySearchBar } from '../searchbar.model';

@Component({
  selector: 'alloy-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  _searchBar: AlloySearchBar;
  _output: any;
  @Input() set searchBar(searchBar: AlloySearchBar) {
  	this._searchBar = searchBar;
    this._output = {};
  }

  @Output() output: EventEmitter<AbstractControl<any,any>> = new EventEmitter<AbstractControl<any,any>>();

  constructor() { 
    this._searchBar = new AlloySearchBar();
  }  

  searchOutput(search){
    console.log(search);
  //   if(search.name){
  //     this._output["search"] = search.name;
  //   }
  //   if(search instanceof AlloyButtonIcon){
  //     this._output["button"] = search.name;
  //   }
  //   this.output.emit(this._output);
  }
}
