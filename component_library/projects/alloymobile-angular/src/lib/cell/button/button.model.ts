import { AlloyIcon} from "../icon/icon.model";

export class Button{
  id: string;
  name: string;
  type: string;
  className: string;
  static idGenerator: number = 0;
  constructor(res?: any){
    if(res){
      this.id = res.id ? res.id : "button" + ++Button.idGenerator;
      this.name = res.name ? res.name : "Button";
      this.type = res.type ? res.type : 'button';
      this.className = res.className ? res.className : "btn btn-lg btn-info mt-1";
    }else{
      this.id = "button" + ++Button.idGenerator;
      this.name = "Button";
      this.type = 'button';
      this.className =  "btn btn-lg btn-info mt-1";
    }
  }
}


export class AlloyButton extends Button{
  active: string;
  constructor(res?: any){
    if(res){
      super(res);
      this.active = res.active ? res.active : "";
    }else{
      super();
      this.active = "";
    }
  }
  tostring(){
    return { 
      id: this.id ?? "button1",
      name: this.name ?? "AlloyButtonIcon",
      className: this.className ?? "btn btn-lg btn-info mt-1",
      type: this.type ?? "button",
      active: this.active ?? ""
    }
  }
}

export class AlloyButtonIcon extends AlloyButton{
  icon: AlloyIcon;
  constructor(res?: any){
    if(res){
      super(res);
      this.icon = res.icon ? AlloyIcon.getAlloyIcon(res.icon) : new AlloyIcon();
    }else{
      super();
      this.icon = new AlloyIcon();
    }
  }
  tostring(){
    return { 
      id: this.id ?? "button1",
      name: this.name ?? "AlloyButtonIcon",
      className: this.className ?? "btn btn-lg btn-info mt-1",
      type: this.type ?? "button",
      active: this.active ?? "",
      icon:this.icon.tostring()
    }
  }
}

export class AlloyButtonSubmit extends Button{
  icon: AlloyIcon;
  show: boolean;
  disable: boolean;
  constructor(res?: any){
    if(res){
      super(res);
      this.icon = res.icon ? AlloyIcon.getAlloyIcon(res.icon) : new AlloyIcon();
      this.show = res.show ? res.show : false;
      this.disable = res.disable ? res.disable : false;
    }else{
      super();
      this.icon = new AlloyIcon();
      this.show = false;
      this.disable = false;
    }
  }
  tostring(){
    return { 
      id: this.id ?? "button1",
      name: this.name ?? "AlloyButtonIcon",
      className: this.className ?? "btn btn-lg btn-info mt-1",
      type: this.type ?? "button",
      show: this.show ?? false,
      disable: this.disable ?? false,
      icon:this.icon.tostring()
    }
  }
}