import { AlloyLink } from '../../cell/link/link.model';
import { AlloyForm } from '../form/form.model';

export class Login {
  id: string; 
  className: string;
  loginForm: AlloyForm;
  rememberMe: boolean;
  forgetPassword: AlloyLink;
  constructor(response?: any) {
    if (response) {
      this.id = response.id ?  response.id : "login";
      this.className = response.className ? response.className : "d-flex justify-content-center flex-column text-center h-100 mt-3";
      this.loginForm = response.loginForm ? new AlloyForm(response.loginForm) : new AlloyForm();
      this.rememberMe = response.rememberMe ? response.rememberMe : false;
      this.forgetPassword = response.forgetPassword ? new AlloyLink(response.forgetPassword) : new AlloyLink();
    } else {
      this.id = "login";
      this.className = "d-flex justify-content-center flex-column text-center h-100 mt-3";
      this.loginForm = new AlloyForm();
      this.rememberMe = false;
      this.forgetPassword = new AlloyLink();
    }
  }
}
