import { AlloyLink } from "../../cell/link/link.model";
import { AlloyForm } from "../form/form.model";

export class Reset{
  id: string; 
  className: string;
  resetForm: AlloyForm;
  loginLink: AlloyLink;
  constructor(response?: any){
    if(response){
      this.id = response.id ?  response.id : "reset";
      this.className = response.className ? response.className : "d-flex justify-content-center flex-column text-center h-100 mt-3";
      this.resetForm = response.resetForm ? new AlloyForm(response.resetForm) : new AlloyForm();
      this.loginLink = response.loginLink ? new AlloyLink(response.loginLink) : new AlloyLink();
    }else{
      this.id = "reset";
      this.className =  "d-flex justify-content-center flex-column text-center h-100 mt-3";
      this.resetForm = new AlloyForm();
      this.loginLink = new AlloyLink();
    }
  }
}