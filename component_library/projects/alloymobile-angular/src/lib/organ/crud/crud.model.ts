import { AlloyCardAction, AlloyCardIconAction, AlloyCardImageAction} from "../../tissue/card/card.model";
import { Table,TableAction } from "../../tissue/table/table.model";
import { AlloyModal, AlloyModalFile, AlloyModalToast} from "../modal/modal.model";

export class Crud{
    id: string;
    className: string;
    modal: AlloyModal;
    constructor(res?: any){
        if(res){
            this.id = res.id ? res.id : "";
            this.className = res.className ? res.className : "";
            this.modal = res.modal ? new AlloyModal(res.modal) : new AlloyModal();
        }else{
            this.id =  "";
            this.className = "";
            this.modal =  new AlloyModal();
        }
    }
}

 export class AlloyCrudTable extends Crud{
    table: TableAction
    constructor(res?: any){
        if(res){
            super(res);
            this.table = res.table ? new TableAction(res.table) : new TableAction();
        }else{
            super();
            this.table =  new TableAction();
        }
    }
}

export class AlloyCrudCard extends Crud{
    type: string;
    cards: AlloyCardAction[]
    constructor(res?: any){
        if(res){
            super(res);
            this.type = res.type ? res.type : "AlloyCardAction";
            switch(this.type){
                case "AlloyCardAction":
                    this.cards = res.cards ? res.cards.map(f=>new AlloyCardAction(f)) : [];
                    break;
                case "AlloyCardIconAction":
                    this.cards = res.cards ? res.cards.map(f=>new AlloyCardIconAction(f)) : [];
                    break;    
                case "AlloyCardImageAction":
                    this.cards = res.cards ? res.cards.map(f=>new AlloyCardImageAction(f)) : [];
                    break;   
                default:
                    this.cards = res.cards ? res.cards.map(f=>new AlloyCardAction(f)) : [];
                    break;                 
            }
        }else{
            super();
            this.type = "AlloyCardAction";
            this.cards =  [];
        }
    }
}

export class AlloyCrudFile{
    id: string;
    className: string;
    table: Table
    constructor(res?: any){
        if(res){
            this.id = res.id ? res.id : "";
            this.className = res.className ? res.className : "";
            this.table = res.table ? new Table(res.table) : new Table();
        }else{
            this.id =  "";
            this.className = "";
            this.table =  new Table();
        }
    }
}

export class AlloyCrudFileAction extends AlloyCrudFile{
    modalFile: AlloyModalFile;
    modalToast: AlloyModalToast;
    constructor(res?: any){
        if(res){
            super(res);
            this.modalFile = res.modalFile ? new AlloyModalFile(res.modalFile) : new AlloyModalFile();
            this.modalToast = res.modalToast ? new AlloyModalToast(res.modalToast) : new AlloyModalToast();
        }else{
            super();
            this.modalFile =  new AlloyModalFile();
            this.modalToast = new AlloyModalToast();
        }
    }
}