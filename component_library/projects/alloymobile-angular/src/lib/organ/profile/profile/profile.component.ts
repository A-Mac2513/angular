import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlloyProfile } from '../profile.model';
import { AbstractControl } from '@angular/forms';
import { AlloyIcon } from '../../../cell/icon/icon.model';

@Component({
  selector: 'alloy-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  _profile: AlloyProfile;
  profileIcon: AlloyIcon;
  name: string;
  email: string;
  @Input() set profile(_profile: AlloyProfile){
    this._profile = _profile;
    this.getName();
    this.getEmail();
  }
  @Output() output: EventEmitter<AbstractControl<any,any>> = new EventEmitter<AbstractControl<any,any>>();
  constructor() {
    this._profile = new AlloyProfile();
    this.profileIcon = new AlloyIcon({id:"icon1",icon:"faUser",size:"2x",spin:false,className:"text-white"});
    this.name = "";
    this.email = "";
  }

  submitData(address){
    this.output.emit(address);
  }

  getName(){
    this._profile.profileForm.fields.forEach(record =>{
      if(record.name == 'name'){
        this.name = record.text;
      }
    });
  }

  getEmail(){
    this._profile.profileForm.fields.forEach(record=>{
      if(record.name == 'email'){
        this.email = record.text;
      }
    });
  }
}
