import { Component, Input } from '@angular/core';
import { AlloyButtonIcon } from '../../../cell/button/button.model';

@Component({
  selector: 'alloy-gallery-button',
  templateUrl: './gallery-button.component.html',
  styleUrls: ['./gallery-button.component.css']
})
export class GalleryButtonComponent {
  _galleryButtons: AlloyButtonIcon[];
  @Input() set galleryButtons(galleryButtons: AlloyButtonIcon[]){
    this._galleryButtons = galleryButtons;
  }
  constructor(){
    this._galleryButtons = [];
  }

  onButtonSelect(button){
    console.log(button);
  }

}
