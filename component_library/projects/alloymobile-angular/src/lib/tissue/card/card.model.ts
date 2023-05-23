import { AlloyIcon} from "../../cell/icon/icon.model";
import { AlloyButtonBar, AlloyLinkBar, Bar } from "../bar/bar.model";

export class CardItem {
  id: string;
  name: string;
  className: string;
  static idGenerator: number = 0;
  constructor(res?: any) {
    if (res) {
      this.id = res.id ? res.id : 'cardItem' + ++CardItem.idGenerator;
      this.className = res.className ? res.className : '';
      this.name = res.name ? res.name : 'Card Item';
    } else {
      this.id = 'cardItem';
      this.className = '';
      this.name = 'Card Item'
    }
  }
}

export class CardField extends CardItem {
  show: boolean;
  constructor(res?: any) {
    if (res) {
      super(res)
      this.show = res.show ? res.show : true;
    } else {
      super();
      this.show = true;
    }
  }
}

export class AlloyLogo{
  imageUrl: string;
  alt: string;
  width: string;
  height: string;
  constructor(res?: any){
    if(res){
      this.imageUrl = res.imageUrl ? res.imageUrl : "https://alloymobile.blob.core.windows.net/alloymobile/alloymobile.png";
      this.alt = res.alt ? res.alt : "Alloymobile";
      this.width = res.width ? res.width : "auto";
      this.height = res.height ? res.height : "auto";
    }else{
      this.imageUrl = "https://alloymobile.blob.core.windows.net/alloymobile/alloymobile.png";
      this.alt = "Alloymobile";
      this.width = "72";
      this.height = "auto";
    }
  }
}

export class AlloyCard{
    id: string;
    className: string;
    body: CardItem;
    fields: CardField[];
    link: string;
    static idGenerator: number = 0;
    constructor(res?: any) {
      if (res) {
        this.id = res.id ? res.id : 'card' + ++AlloyCard.idGenerator;
        this.className = res.className ? res.className : 'card border m-2 shadow';
        this.link = res.link ? res.link : '';
        this.body = res.body ? new CardItem(res.body) : new CardItem();
        this.fields = res.fields ? res.fields.map(field=>new CardField(field)) : [];
      } else {
        this.id = 'card' + ++AlloyCard.idGenerator;
        this.className = 'card border m-2 shadow';
        this.link = '';
        this.body = new CardItem();
        this.fields = [];
      }
    }
}

export class AlloyCardAction extends AlloyCard{
  action: Bar;
  type: string
  constructor(res?){
   if(res){
     super(res);
     this.type = res.type ? res.type : "AlloyButtonBar";
     switch(this.type){
      case "AlloyButtonBar":
        this.action = res.action ? new AlloyButtonBar(res.action) : new AlloyButtonBar();
        break;
      case "AlloyLinkBar":
        this.action = res.action ?  new AlloyLinkBar(res.action) : new AlloyLinkBar();
        break;   
      default:
        this.action = res.action ? new AlloyButtonBar(res.action) : new AlloyButtonBar();
        break;
     }
   }else{
     super();
     this.type = "AlloyButtonBar";
     this.action = new AlloyButtonBar();
   }
  }
}


export class AlloyCardIcon extends AlloyCard {
  icon: AlloyIcon;
  iconClass: string;
  textClass: string;
  constructor(res?: any) {
    if (res) {
        super(res)  
        this.icon = res.icon ? new AlloyIcon(res.icon) : new AlloyIcon();
        this.iconClass = res.iconClass ? res.iconClass : 'col-4 icon-lg rounded-circle bg-warning text-white mb-0';
        this.textClass = res.textClass ? res.textClass : 'col-8';
    } else {
        super()  
        this.iconClass = 'icon-lg rounded-circle bg-warning text-white mb-0';
        this.icon = new AlloyIcon();
        this.textClass = 'col-8';
    }
  }
}

export class AlloyCardIconAction extends AlloyCardAction{
  icon: AlloyIcon;
  iconClass: string;
  textClass: string;
  constructor(res?){
   if(res){
     super(res);
     this.icon = res.icon ? AlloyIcon.getAlloyIcon(res.icon) : new AlloyIcon();
     this.iconClass = res.iconClass ? res.iconClass : 'col-4 icon-lg rounded-circle bg-warning text-white mb-0';
     this.textClass = res.textClass ? res.textClass : 'col-8';
   }else{
     super();
     this.iconClass = 'icon-lg rounded-circle bg-warning text-white mb-0';
     this.icon = new AlloyIcon();
     this.textClass = 'col-8';
   }
  }
}

export class AlloyCardImage extends AlloyCard {
  image: AlloyLogo;
  imageClass: string;
  textClass: string;
  constructor(res?: any) {
    if (res) {
        super(res)  
        this.image = res.image ? new AlloyLogo(res.image) :  new AlloyLogo();
        this.imageClass = res.imageClass ? res.imageClass : "card-img-top rounded p-2";
        this.textClass = res.textClass ? res.textClass : 'col-8';
    } else {
        super()  
        this.image = new AlloyLogo();
        this.imageClass = 'card-img-top rounded p-2';
        this.textClass = 'col-8';
    }
  }
}

export class AlloyCardImageAction extends AlloyCardAction{
  image: AlloyLogo;
  imageClass: string;
  textClass: string;
  constructor(res?: any) {
    if (res) {
        super(res)  
        this.image = res.image ? new AlloyLogo(res.image) :  new AlloyLogo();
        this.imageClass = res.imageClass ? res.imageClass : "card-img-top rounded p-2";
        this.textClass = res.textClass ? res.textClass : 'col-8';
    } else {
        super()  
        this.image = new AlloyLogo();
        this.imageClass = 'card-img-top rounded p-2';
        this.textClass = 'col-8';
    }
  }
}
