import { AlloyLink,AlloyLinkIcon, AlloyLinkLogo } from "../../cell/link/link.model";

export class NavBar {
    id: string;
    className: string;
    logo: AlloyLinkLogo;
    constructor(response?: any) {
      if (response) {
        this.id = response.id ? response.id : "";
        this.className = response.className ? response.className : '';
        this.logo =  response.logo ? new AlloyLinkLogo(response.logo) :  new AlloyLinkLogo();
      } else {
        this.id = "";
        this.className = '';
        this.logo = new AlloyLinkLogo();
      }
    }
}

export class AlloyNavBar extends NavBar {
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

export class AlloyNavBarIcon extends NavBar{
  linkIcon: AlloyLinkIcon[];
  constructor(response?: any) {
    if (response) {
      super(response);
      this.linkIcon = response.linkIcon ? response.linkIcon.map((linkIcon: AlloyLinkIcon)=>new AlloyLinkIcon(linkIcon)) : []; 
    } else {
      super();
      this.linkIcon = [];
    }
  }
}

export class AlloyNavBarLinkIcon extends AlloyNavBar{
  linkIcon: AlloyLinkIcon[];
  constructor(response?: any) {
    if (response) {
      super(response);
      this.linkIcon = response.linkIcon ? response.linkIcon.map((linkIcon: AlloyLinkIcon)=>new AlloyLinkIcon(linkIcon)) : []; 
    } else {
      super();
      this.linkIcon = [];
    }
  }
}

