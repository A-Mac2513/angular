import { Component, Input } from '@angular/core';
import { AlloyCard } from '../card.model';

@Component({
  selector: 'alloy-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  _card: AlloyCard
  @Input() set card(_card: AlloyCard){
    this._card = _card;
  }
  constructor(){
    this._card = new AlloyCard();
  }
}
