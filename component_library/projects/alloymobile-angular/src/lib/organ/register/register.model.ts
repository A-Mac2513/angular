import { AlloyLink } from "../../cell/link/link.model";
import { AlloyForm } from "../form/form.model";

export class Register{
    id: string; 
    className: string;
    registerForm: AlloyForm;
    privacyLink: AlloyLink;
    termsLink: AlloyLink;
    constructor(response?: any){
      if(response){
        this.id = response.id ?  response.id : "";
        this.className = response.className ? response.className : "";
        this.registerForm = response.registerForm ? new AlloyForm(response.registerForm) : new AlloyForm();
        this.privacyLink = response.privacyLink ? new AlloyLink(response.privacyLink) : new AlloyLink();
        this.termsLink = response.termsLink ? new AlloyLink(response.termsLink) : new AlloyLink();
      }else{
        this.id = "register";
        this.className = "d-flex justify-content-center flex-column text-center h-100 mt-3";
        this.registerForm = new AlloyForm();
        this.privacyLink = new AlloyLink();
        this.termsLink = new AlloyLink();
      }
    }
  }
