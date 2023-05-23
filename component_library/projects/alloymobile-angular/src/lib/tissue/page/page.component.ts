import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Page } from './page.model';

@Component({
  selector: 'alloy-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent{
  _page: Page;
  @Input() set page(page: Page){
    this._page = page;
  }
  @Output() output: EventEmitter<number> = new EventEmitter<number>();

  nextPage(pageNumber){
    this.output.emit(pageNumber);
  }
}
