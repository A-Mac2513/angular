import { AlloyIcon } from "../icon/icon.model";
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export class AlloyInputType{
  type: string;
  constructor(res?: any) {
    if(res){
      this.type = res.type ? res.type : 'text';
      switch (this.type){
        case "text":
        case "email":
        case "file":
        case "date":  
        case "number":    
        case "search":   
        case "password":   
        if(res.icon != undefined){
          return new AlloyInputTextIcon(res);
        }else{
          return new AlloyInputText(res);
        } 
        case "textarea":
          return new AlloyInputTextArea(res);
        case "select":
          return new AlloyInputSelect(res); 
        case "radio":
        case "checkbox":  
          return new AlloyInput(res);   
        default:
          return new AlloyInputText(res);
      }
    }else{
      return new AlloyInput();
    }
  }
}


export class AlloyInput{
  id: string;
  name: string;
  type: string;
  label: string;
  className: string;
  readonly: boolean;
  validators: [];
  errors: AlloyValidation[];
  //Only matches password and confirmPassword please update for generic
  match: boolean;
  static idGenerator: number = 0;
  constructor(res?: any) {
    if (res) {
      this.id = res.id ? res.id : 'input' + ++AlloyInput.idGenerator;
      this.name = res.name ? res.name : 'name';
      this.type = res.type ? res.type : 'text';
      this.label = res.label ? res.label : 'Name';
      this.className = res.className ? res.className : 'input-group';
      this.readonly = res.readonly ? res.readonly : false;
      this.match = res.match ? res.match : false;
      this.errors =  res.errors ? res.errors.map((res: AlloyCustomValidation)=> new AlloyCustomValidation(res)) : []; 
      this.validators =  res.errors ? res.errors.map((res: AlloyCustomValidation)=>  getValidator(new AlloyCustomValidation(res))) : []; 
    } else {
      this.id = 'input' + ++AlloyInput.idGenerator;
      this.name = 'name';
      this.type = 'text';
      this.label = 'Name';
      this.className = 'input-group';
      this.readonly = false;
      this.match = false;
      this.errors = [];
      this.validators = [];
    }
  }

  toString(){
    return {
      id: this.id ?? "input1",
      name: this.name ?? "AlloyInputTextIcon",
      type: this.type ?? "text",
      label: this.label ?? "",
      className: this.className ?? "",
      readonly: this.readonly ?? false,
      match: this.match ?? false,
      errors: this.errors ?? []
    }
  }
}

export class AlloyInputText extends AlloyInput {
  text: string;
  placeholder: string;
  constructor(res?: any) {
    if (res) {
      super(res);
      this.text = res.text ? res.text : '';
      this.placeholder = res.placeholder ? res.placeholder : '';
    } else {
      super();
      this.text = '';
      this.placeholder = '';
    }
  }
  
  toString(){
    return {
      id: this.id ?? "input1",
      name: this.name ?? "AlloyInputTextIcon",
      type: this.type ?? "text",
      className: this.className ?? "",
      placeholder: this.placeholder ?? "",
      readonly: this.readonly ?? false,
      text: this.text ?? "",
      label: this.label ?? "",
      match: this.match ?? false,
      errors: this.errors ?? []
    }
  }
}

export class AlloyInputTextArea extends AlloyInputText{
  height: string;
  constructor(res?: any) {
    if (res) {
      super(res);
      this.height = res.height ? res.height : '100px';
    } else {
      super();
      this.height ='100px';
    }
  }
  toString(){
    return {
      id: this.id ?? "input1",
      name: this.name ?? "AlloyInputTextArea",
      type: this.type ?? "textarea",
      className: this.className ?? "",
      placeholder: this.placeholder ?? "",
      readonly: this.readonly ?? false,
      text: this.text ?? "",
      label: this.label ?? "",
      height: this.height ?? "100px",
      match: this.match ?? false,
      errors: this.errors ?? []
    }
  }
}

export class AlloyInputSelect extends AlloyInputText{
  options: String[];
  constructor(res?: any) {
    if (res) {
      super(res);
      this.options = res.options ? res.options : [];
    } else {
      super();
      this.options = [];
    }
  }
  toString(){
    return {
      id: this.id ?? "input1",
      name: this.name ?? "AlloyInputSelect",
      type: this.type ?? "select",
      className: this.className ?? "",
      placeholder: this.placeholder ?? "",
      readonly: this.readonly ?? false,
      text: this.text ?? "",
      label: this.label ?? "",
      options: this.options ?? [],
      match: this.match ?? false,
      errors: this.errors ?? []
    }
  }
}

export class AlloyInputTextIcon extends AlloyInputText {
  icon: AlloyIcon;
  constructor(res?: any) {
    if (res) {
      super(res);
      this.icon = res.icon ?  new AlloyIcon(res.icon) : new AlloyIcon();
    } else {
      super();
      this.icon = new AlloyIcon();
    }
  }

  toString(){
    return {
      id: this.id ?? "input1",
      name: this.name ?? "AlloyInputTextIcon",
      type: this.type ?? "text",
      className: this.className ?? "",
      placeholder: this.placeholder ?? "",
      readonly: this.readonly ?? false,
      text: this.text ?? "",
      label: this.label ?? "",
      icon: this.icon.tostring(),
      match: this.match ?? false,
      errors: this.errors ?? []
    }
  }
}

/*---------------------------Validation-----------------*/
export function getValidator(validator: AlloyCustomValidation){
  switch(validator.name){
    case "required":
      return Validators.required;
    case "email":
      return Validators.email;
    case "minLength":
      return Validators.minLength(Number(validator.pattern)); 
    case "maxLength":
      return Validators.maxLength(Number(validator.pattern));
    case "pattern":
      return Validators.pattern(validator.pattern); 
    case "custom":
      switch (validator.type){
        case "passwordStrength":
          return passwordStrengthValidator();
        default:
          return Validators.required; 
      }
    default:
      return Validators.required;   
  }
}

export function matchValidator(control: AbstractControl): ValidatorFn {
  const password: string = control.get("password").value; // get password from our password form control
  const confirmPassword: string = control.get("confirmPassword").value; // get password from our confirmPassword form control
  
  // if the confirmPassword value is null or empty, don't return an error.
  if (!confirmPassword?.length) {
    return null;
  }
  // compare the passwords and see if they match.
  if (password !== confirmPassword) {
    let errors = {};
    if(control.get("confirmPassword").errors != undefined){
      errors = control.get("confirmPassword").errors;
    }
    errors["mismatch"] = true;
    control.get("confirmPassword").setErrors(errors);
  } else {
    // if passwords match, don't return an error.
    return null;
  }
}

export function passwordStrengthValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
      const value = control.value;
      if (!value) {
          return null;
      }
      const hasUpperCase = /[A-Z]+/.test(value);
      const hasLowerCase = /[a-z]+/.test(value);
      const hasNumeric = /[0-9]+/.test(value);
      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;
      return !passwordValid ? {custom:true}: null;
  }
}

export class AlloyValidation{
  name: string;
  message: string;
  constructor(res?: any) {
    if (res) {
      this.name = res.name ? res.name : 'required';
      this.message = res.message ? res.message : 'Name is required';
    } else {
      this.name = 'required';
      this.message = 'Name is required';
    }
  }
}

export class AlloyPatternValidation extends AlloyValidation{
  pattern: string;
  constructor(res?: any) {
    if (res) {
      super(res);
      this.pattern = res.pattern ? res.pattern : '';
    } else {
      super();
      this.pattern = '';
    }
  }
}

export class AlloyCustomValidation extends AlloyPatternValidation{
  type: string;
  constructor(res?: any) {
    if (res) {
      super(res);
      this.type = res.type ? res.type : '';
    } else {
      super();
      this.type = '';
    }
  }
}
