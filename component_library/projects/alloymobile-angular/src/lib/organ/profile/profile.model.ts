
import { AlloyCrudCard } from "../crud/crud.model";
import { AlloyCardIconAction } from "../../tissue/card/card.model";
import { AlloyForm } from "../form/form.model";

export class AlloyProfile{
    id: string;
    className: string;
    action: string;
    profileForm: AlloyForm; 
    data: any;
    sample: AlloyCardIconAction;
    details: AlloyCrudCard
    constructor(res?: any){
        if(res){
            this.id = res.id ? res.id : "profile";
            this.className = res.className ? res.className : "col m-2";
            this.action = res.action ? res.action : "";
            this.profileForm = res.profileForm ? new AlloyForm(res.profileForm) : new AlloyForm();
            this.data = {}
            this.sample = res.sample ? new AlloyCardIconAction(res.sample) : new AlloyCardIconAction();
            this.details = res.details ? new AlloyCrudCard(res.details) : new AlloyCrudCard();
        }else{
            this.id =  "profile";
            this.className = "col m-2";
            this.action = "";
            this.data = {},
            this.profileForm = new AlloyForm();
            this.sample = new AlloyCardIconAction();
            this.details = new AlloyCrudCard();
        }
    }
}