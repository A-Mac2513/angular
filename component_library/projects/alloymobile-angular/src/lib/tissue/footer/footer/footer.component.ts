import { Component, Input } from '@angular/core';
import { AlloyFooter } from '../footer-model';

@Component({
  selector: 'alloy-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  _footer: AlloyFooter;
  @Input() set footer(_footer: AlloyFooter) {
  	this._footer = _footer;
  }
  constructor(){
    this._footer = new AlloyFooter();
  }
}
