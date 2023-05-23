import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconPageComponent } from './cell-page/icon-page/icon-page.component';
import { LinkPageComponent } from './cell-page/link-page/link-page.component';
import { ButtonPageComponent } from './cell-page/button-page/button-page.component';
import { LoginPageComponent } from './organ-page/login-page/login-page.component';
import { RegisterPageComponent } from './organ-page/register-page/register-page.component';
import { ForgetPageComponent } from './organ-page/forget-page/forget-page.component';
import { TablePageComponent } from './tissue-page/table-page/table-page.component';
import { TableDetailPageComponent } from './table-detail-page/table-detail-page.component';
import { InputPageComponent } from './cell-page/input-page/input-page.component';
import { CrudPageComponent } from './organ-page/crud-page/crud-page.component';
import { ResetPageComponent } from './organ-page/reset-page/reset-page.component';
import { IconLinkPageComponent } from './cell-page/icon-link-page/icon-link-page.component';
import { IconButtonPageComponent } from './cell-page/icon-button-page/icon-button-page.component';
import { CellPageComponent } from './cell-page/cell-page.component';
import { TissuePageComponent } from './tissue-page/tissue-page.component';
import { OrganPageComponent } from './organ-page/organ-page.component';
import { ButtonIconPageComponent } from './cell-page/button-icon-page/button-icon-page.component';
import { ButtonDropdownPageComponent } from './cell-page/button-dropdown-page/button-dropdown-page.component';
import { ButtonSubmitPageComponent } from './cell-page/button-submit-page/button-submit-page.component';
import { LinkLogoPageComponent } from './cell-page/link-logo-page/link-logo-page.component';
import { LinkIconPageComponent } from './cell-page/link-icon-page/link-icon-page.component';
import { LinkDropdownPageComponent } from './cell-page/link-dropdown-page/link-dropdown-page.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CodePageComponent } from './organ-page/code-page/code-page.component';
import { AlloymobileAngularModule } from 'alloymobile-angular';
import { BarPageComponent } from './tissue-page/bar-page/bar-page.component';
import { CardPageComponent } from './tissue-page/card-page/card-page.component';
import { InputsPageComponent } from './tissue-page/inputs-page/inputs-page.component';
import { FooterPageComponent } from './tissue-page/footer-page/footer-page.component';
import { NavPageComponent } from './tissue-page/nav-page/nav-page.component';
import { PagePageComponent } from './tissue-page/page-page/page-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IconPageComponent,
    LinkPageComponent,
    ButtonPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ForgetPageComponent,
    TablePageComponent,
    TableDetailPageComponent,
    InputPageComponent,
    CrudPageComponent,
    ResetPageComponent,
    IconLinkPageComponent,
    IconButtonPageComponent,
    CellPageComponent,
    TissuePageComponent,
    OrganPageComponent,
    ButtonIconPageComponent,
    ButtonDropdownPageComponent,
    ButtonSubmitPageComponent,
    LinkLogoPageComponent,
    LinkIconPageComponent,
    LinkDropdownPageComponent,
    CodePageComponent,
    BarPageComponent,
    CardPageComponent,
    InputsPageComponent,
    FooterPageComponent,
    NavPageComponent,
    PagePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AlloymobileAngularModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
