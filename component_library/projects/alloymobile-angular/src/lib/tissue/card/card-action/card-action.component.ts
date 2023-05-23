import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlloyCardAction } from '../card.model';

@Component({
  selector: 'alloy-card-action',
  templateUrl: './card-action.component.html',
  styleUrls: ['./card-action.component.css']
})
export class CardActionComponent {
  _cardAction: AlloyCardAction;
  @Input() set cardAction(cardAction: AlloyCardAction){
    this._cardAction = cardAction;
  }

  @Output() output: EventEmitter<any>= new EventEmitter<any>();

  constructor(){
    this._cardAction = new AlloyCardAction();
  }

  getAction(action){
    let data = {row:{},action:{}};
    data.row = this._cardAction;
    data.action = action.name;
    this.output.emit(data);
  }
}
