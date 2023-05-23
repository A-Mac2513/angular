import { AlloyLink } from "../../cell/link/link.model";
import { AlloyForm } from "../form/form.model";

export class Code{
  id: string; 
  className: string;
  codeForm: AlloyForm;
  loginLink: AlloyLink;
  constructor(response?: any){
    if(response){
      this.id = response.id ?  response.id : "code";
      this.className = response.className ? response.className : "d-flex justify-content-center flex-column text-center h-100 mt-3";
      this.codeForm = response.codeForm ? new AlloyForm(response.codeForm) : new AlloyForm();
      this.loginLink = response.loginLink ? new AlloyLink(response.loginLink) : new AlloyLink();
    }else{
      this.id = "code";
      this.className =  "d-flex justify-content-center flex-column text-center h-100 mt-3";
      this.codeForm = new AlloyForm();
      this.loginLink = new AlloyLink();
    }
  }
}
  