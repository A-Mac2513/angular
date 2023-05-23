import { AlloyButton, AlloyButtonIcon } from "../../cell/button/button.model";
import { AlloyLink, AlloyLinkIcon, AlloyLinkLogo } from "../../cell/link/link.model";

export class Bar{
    id: string;
    className: string;
    selected: string;
    static idGenerator: number = 0;
    constructor(res?: any){
      if(res){
        this.id = res.id ? res.id : "buttonBar" + ++AlloyButtonBar.idGenerator;
        this.className = res.className ? res.className : "d-flex justify-content-center";
        this.selected = res.selected ? res.selected : "";
      }else{
        this.id = "buttonBar" + ++AlloyButtonBar.idGenerator;
        this.className = "d-flex justify-content-center";
        this.selected = "";
      }
    }
}

export class AlloyButtonBar extends Bar{
    type: string;
    buttons: AlloyButton[];
    constructor(res?: any){
      if(res){
        super(res);
        this.type = res.type ? res.type : 'AlloyButton';
        switch(this.type){
          case "AlloyButton":
            this.buttons = res.buttons ? res.buttons.map(i=> new AlloyButton(i)) : [];
            break;
          case "AlloyButtonIcon":
          case "AlloyIconButton":
            this.buttons = res.buttons ? res.buttons.map(i=> new AlloyButtonIcon(i)) : [];
            break;  
          default:
            this.buttons = res.buttons ? res.buttons.map(i=> new AlloyButton(i)) : [];
            break;
         }
      }else{
        super()
        this.type = 'AlloyButton';
        this.buttons = [];
      }
    }

    toString(){
        return {
            id: this.id ?? "buttonBar1",
            className: this.className ?? "d-flex justify-content-center",
            selected: this.selected ?? "active",
            type: this.type ?? "AlloyButton",
            buttons: this.buttons.map(s=>s.tostring()) ?? []
        }
    }
}

export class AlloyLinkBar extends Bar{
    type: string;
    static idGenerator: number = 0;
    links: AlloyLink[];
    constructor(res?: any){
      if(res){
        super(res);
        this.type = res.type ? res.type : 'AlloyLink';
        switch(this.type){
          case "AlloyLink":
            this.links = res.links ? res.links.map(i=> new AlloyLink(i)) : [];
            break;
          case "AlloyLinkIcon":
          case "AlloyIconLink":
            this.links = res.links ? res.links.map(i=> new AlloyLinkIcon(i)) : [];
            break;  
          case "AlloyLinkLogo":
            this.links = res.links ? res.links.map(i=> new AlloyLinkLogo(i)) : [];
            break;  
          default:
            this.links = res.links ? res.links.map(i=> new AlloyLink(i)) : [];
            break;
         }
      }else{
        super();
        this.type = 'AlloyLink';
        this.links = [];
      }
    }

    toString(){
        return {
            id: this.id ?? "linkBar1",
            className: this.className ?? "d-flex justify-content-center",
            selected: this.selected ?? "active",
            type: this.type ?? "AlloyButton",
            links: this.links.map(s=>s.tostring()) ?? []
        }
    }
  }