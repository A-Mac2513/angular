import { AlloyButtonIcon } from "../../cell/button/button.model";

export class ClientBar{
    id: string;
    className: string;
    backButton: AlloyButtonIcon;
    constructor(response?: any) {
        if (response) {
            this.id = response.id ? response.id : "";
            this.className = response.className ? response.className : '';
            this.backButton =  response.backButton ? new AlloyButtonIcon(response.backButton) : new AlloyButtonIcon();
        } else {
            this.id = "";
            this.className = '';
            this.backButton =  new AlloyButtonIcon();
        }
    }
}

export class AlloyClientBar extends ClientBar{
    client: ClientBarClient;
    constructor(response?: any) {
        if (response) {
          super(response);
          this.client = response.client ? new ClientBarClient(response.client) :  new ClientBarClient();
        } else {
          super();
          this.client = new ClientBarClient();
        }
    }
}
  
export class ClientBarClient {
    id: string;
    name: string;
    roles: ClientBarRole[];
    constructor(response?: any) {
      if (response) {
        this.id = response.id ? response.id : '';
        this.name = response.name ? response.name : '';
        this.roles = response.roles ? response.roles.map(r=>new ClientBarRole(r)) :  [];
      } else {
        this.id = '';
        this.name = '';
        this.roles = [];
      }
    }
}
  
export class ClientBarRole {
    id: string;
    name: string;
    link: string;
    selected: boolean;
    constructor(response?: any) {
      if (response) {
        this.id = response.id ? response.id : '';
        this.name = response.name ? response.name : '';
        this.link = response.link ? response.link : '';
        this.selected = false;
      } else {
        this.id = '';
        this.name = '';
        this.link = '';
        this.selected = false;
      }
    }
}
  
  
