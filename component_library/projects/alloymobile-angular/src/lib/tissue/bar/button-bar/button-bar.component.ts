import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlloyButtonBar } from '../bar.model';
import { AlloyButton } from '../../../cell/button/button.model';

@Component({
  selector: 'alloy-button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.css']
})
export class ButtonBarComponent {
  _buttonBar: AlloyButtonBar;
  @Input() set buttonBar(buttonBar: AlloyButtonBar){
    this._buttonBar = buttonBar;
  }
  @Output() output: EventEmitter<AlloyButton>= new EventEmitter<AlloyButton>();
  constructor() {
    this._buttonBar = new AlloyButtonBar();
  }

  getSelected(tab: AlloyButton){
    this._buttonBar.buttons.forEach(b => {
      if(b.id === tab.id){
        b.active = this._buttonBar.selected;
      }else{
        b.active = '';
      }
    });
    this.output.emit(tab);
  }
}
