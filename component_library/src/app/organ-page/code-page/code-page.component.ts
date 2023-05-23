import { Component} from '@angular/core';
import { Code } from 'alloymobile-angular';
import CodeDB from './code-page.data.json';
@Component({
  selector: 'app-code-page',
  templateUrl: './code-page.component.html',
  styleUrls: ['./code-page.component.css']
})
export class CodePageComponent{
  code: Code;
  constructor() {
      this.code = new Code(CodeDB);
  }

  onCode(form){
    console.log(form);
  }
}
