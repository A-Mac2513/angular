import { AlloyButtonIcon } from "../../cell/button/button.model";
import { AlloyInputTextIcon } from "../../cell/input/input.model";
import { AlloyLinkIcon, AlloyLink } from "../../cell/link/link.model";
import { AlloyForm } from "../../organ/form/form.model";

export class Nav{
    id: string;
    className: string;
    selected: string;
    constructor(response?: any){
      if(response){
        this.id = response.id ? response.id : "alloyNav";
        this.className = response.className ? response.className : "nav nav-pills nav-fill";
        this.selected = response.selected ? response.selected : "";
      }else{
        this.id = "alloyNav";
        this.className = 'nav nav-pills nav-fill';
        this.selected = "";
      }
    }
}

export class AlloyTabForm extends Nav{
    tabs: AlloyButtonIcon[];
    id: string;
    title: string;
    className: string;
    tabClass: string
    formClass: string;
    messageClass: string;
    message: string;
    type: string;
    action: string;
    actionClass: string;
    fields: AlloyInputTextIcon[];
    actions: AlloyButtonIcon[];
    data: any;
    constructor(res?: any){
      if(res){
        super(res);
        this.tabs = res.tabs ? res.tabs.map(n => new AlloyButtonIcon(n)) : [];
        if(this.tabs.length > 0){
            this.tabs[0].active = this.selected;
        }
        this.id = res.id ? res.id : "form";
        this.title = res.title ? res.title : "AlloyMobile";
        this.type = res.type ? res.type : "AlloyInputTextIcon";
        this.className = res.className ? res.className : "col m-2";
        this.tabClass = res.tabClass ? res.tabClass : "col m-2";
        this.formClass = res.formClass ? res.formClass : "col m-2";
        this.messageClass = res.messageClass ? res.messageClass : "alert alert-text-danger m-0 p-0";
        this.message = res.message ? res.message : "";
        this.action = res.action ? res.action : "";
        this.actionClass = res.actionClass ? res.actionClass : "row";
        this.fields = res.fields ? res.fields.map(f=>new AlloyInputTextIcon(f)) : [];
        this.actions = res.actions ? res.actions.map(f=>new AlloyInputTextIcon(f)) : [];
        this.data={};
      }else{
        super();
        this.tabs = [];
        this.id =  "form";
        this.title = "AlloyMobile";
        this.title = "AlloyInputTextIcon";
        this.className = "col m-2";
        this.tabClass = "m-2";
        this.formClass = "m-2";
        this.messageClass = "alert alert-text-danger m-0 p-0";
        this.message = "";
        this.action = "";
        this.actionClass = "row";
        this.fields = [];
        this.actions = [];
        this.data = {}
      }
    } 
}
  
export class AlloyTabLink extends Nav {
    tabs: AlloyLinkIcon[];
    tabClass: string;
    constructor(res?: any){
      if(res){
        super(res)
        this.tabs = res.tabs ? res.tabs.map(n => new AlloyLinkIcon(n)) : [];
        if(this.tabs.length > 0){
          this.tabs[0].active = this.selected;
        }
        this.tabClass = res.tabClass ? res.tabClass : "col m-2";
      }else{
        super();
        this.tabs = [];
        this.tabClass = "m-2";
      }
    }
}
  
export class AlloySideBar extends Nav {
    link: AlloyLink[];
  constructor(response?: any) {
    if (response) {
      super(response);
      this.link = response.link ? response.link.map((link: AlloyLink)=>new AlloyLink(link)) : []; 
    } else {
      super();
      this.link = [];
    }
  }
}


export class AlloyIconSideBar extends Nav  {
    close: string;
    linkIcon: AlloyLinkIcon[];
  constructor(response?: any) {
    if (response) {
      super(response);
      this.close = response.close ? response.close : '';
      this.linkIcon = response.linkIcon ? response.linkIcon.map((linkIcon: AlloyLinkIcon)=>new AlloyLinkIcon(linkIcon)) : []; 
    } else {
      super();
      this.close = '';
      this.linkIcon = [];
    }
  }
}

export class AlloyTabButton extends Nav {
    tabs: AlloyButtonIcon[];
    forms: AlloyForm[];
    constructor(response?: any){
      if(response){
        super(response);
        this.tabs = response.tabs ? response.tabs.map(n => new AlloyButtonIcon(n)) : [];
        if(this.tabs.length > 0){
            this.tabs[0].active = this.selected;
        }
      }else{
        super();
        this.tabs = [];
      }
    }
}

