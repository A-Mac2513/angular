import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlloyCardIconAction } from '../card.model';

@Component({
  selector: 'alloy-card-icon-action',
  templateUrl: './card-icon-action.component.html',
  styleUrls: ['./card-icon-action.component.css']
})
export class CardIconActionComponent {
  _cardIconAction: AlloyCardIconAction;
  @Input() set cardIconAction(cardIconAction: AlloyCardIconAction){
    this._cardIconAction = cardIconAction;
    console.log(this._cardIconAction);
  }

  @Output() output: EventEmitter<any>= new EventEmitter<any>();

  constructor(){
    this._cardIconAction = new AlloyCardIconAction();
  }

  getAction(action){
    let data = {row:{},action:{}};
    data.row = this._cardIconAction;
    data.action = action.name;
    this.output.emit(data);
  }
}
