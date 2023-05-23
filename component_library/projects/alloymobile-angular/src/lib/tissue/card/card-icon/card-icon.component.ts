import { Component, Input } from '@angular/core';
import { AlloyCardIcon } from '../card.model';

@Component({
  selector: 'alloy-card-icon',
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.css']
})
export class CardIconComponent {
  _cardIcon: AlloyCardIcon
  @Input() set cardIcon(_cardIcon: AlloyCardIcon){
    this._cardIcon = _cardIcon;
  }
  constructor(){
    this._cardIcon = new AlloyCardIcon();
  }
}
