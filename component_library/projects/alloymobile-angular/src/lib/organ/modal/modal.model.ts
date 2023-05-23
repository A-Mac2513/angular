import { AlloyButton } from "../../cell/button/button.model";
import { AlloyInputText, AlloyInputTextIcon } from "../../cell/input/input.model";

export class Modal{
    id: string;
    title: string;
    className: string;
    submit: AlloyButton;
    action: string;
    constructor(res?: any){
        if(res){
            this.id = res.id ? res.id : "";
            this.title = res.title ? res.title : "";
            this.className = res.className ? res.className : "modal fade";
            this.submit = res.submit ? new AlloyButton(res.submit) : new AlloyButton();
            this.action = res.action ? res.action : "";
        }else{
            this.id =  "";
            this.title = "";
            this.className = "modal fade";
            this.submit = new AlloyButton();
            this.action = "";
        }
    }
}

export class AlloyModalToast extends Modal{
    message: string;
    constructor(res?: any){
        if(res){
            super(res);
            this.message = res.message ?  res.message :'';

        }else{
            super();
            this.message = '';
        }
    }
}


export class AlloyModalFile extends Modal{
    file: AlloyInputText;
    constructor(res?: any){
        if(res){
            super(res);
            this.file = res.file ? res.file : new AlloyInputText();
        }else{
            super();
            this.file = new AlloyInputText();
        }
    }
}


export class AlloyModal extends Modal{
    fields: AlloyInputTextIcon[];
    data: any;
    constructor(res?: any){
        if(res){
            super(res);
            this.fields = res.fields ? res.fields.map(f=>new AlloyInputTextIcon(f)) : [];
            this.data={};
        }else{
            super();
            this.fields = [];
            this.data = {}
        }
    }
}