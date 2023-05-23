
import { AlloyLink, AlloyLinkIcon, AlloyLinkLogo } from "../../cell/link/link.model";

export class AlloyFooter{
    id: string;
    title: string;
    className: string;
    logo: AlloyLinkLogo;
    link: AlloyLink[];
    social: AlloyLinkIcon[];
    static idGenerator: number = 0;
    constructor(res?: any){
        if(res){
            this.id = res.id ? res.id : "button" + ++AlloyFooter.idGenerator;
            this.title = res.title ? res.title : "AlloyMobile";
            this.className = res.className ? res.className : "bg-info container-fluid";
            this.logo =  res.logo ? new AlloyLinkLogo(res.logo) :  new AlloyLinkLogo();
            this.link = res.link ? res.link.map((link: AlloyLink)=>new AlloyLink(link)) : []; 
            this.social = res.social ? res.social.map((social: AlloyLinkIcon)=>new AlloyLinkIcon(social)) : []; 
        }else{
            this.id =  "footer1";
            this.title = "AlloyMobile";
            this.className = "bg-info container-fluid";
            this.logo = new AlloyLinkLogo();
            this.link = [];
        }
    }

    toString(){
        return{
            id: this.id ?? "footer1",
            title: this.title ?? "AlloyMobile",
            className: this.className ?? "bg-info container-fluid",
            logo: this.logo ?? new AlloyLinkLogo(),
            link: this.link ?? [],
            social: this.social.map(s=>s.tostring()) ?? []
        }
    }
}