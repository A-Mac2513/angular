import { AlloyLink } from "../../cell/link/link.model";
import { AlloyForm } from "../form/form.model";

export class Forget{
  id: string; 
  className: string;
  forgetForm: AlloyForm;
  loginLink: AlloyLink;
  constructor(response?: any) {
    if (response) {
      this.id = response.id ?  response.id : "forget";
      this.className = response.className ? response.className : "d-flex justify-content-center flex-column text-center h-100 mt-3";
      this.forgetForm = response.forgetForm ? new AlloyForm(response.forgetForm) : new AlloyForm();
      this.loginLink = response.loginLink ? new AlloyLink(response.loginLink) : new AlloyLink();
    } else {
      this.id = "forget";
      this.className = "d-flex justify-content-center flex-column text-center h-100 mt-3";
      this.forgetForm = new AlloyForm();
      this.loginLink = new AlloyLink();
    }
  }
}
  