import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonPageComponent } from './cell-page/button-page/button-page.component';
import { CellPageComponent } from './cell-page/cell-page.component';
import { IconButtonPageComponent } from './cell-page/icon-button-page/icon-button-page.component';
import { IconLinkPageComponent } from './cell-page/icon-link-page/icon-link-page.component';
import { IconPageComponent } from './cell-page/icon-page/icon-page.component';
import { InputPageComponent } from './cell-page/input-page/input-page.component';
import { LinkPageComponent } from './cell-page/link-page/link-page.component';
import { OrganPageComponent } from './organ-page/organ-page.component';
import { CrudPageComponent } from './organ-page/crud-page/crud-page.component';
import { ForgetPageComponent } from './organ-page/forget-page/forget-page.component';
import { LoginPageComponent } from './organ-page/login-page/login-page.component';
import { RegisterPageComponent } from './organ-page/register-page/register-page.component';
import { ResetPageComponent } from './organ-page/reset-page/reset-page.component';
import { TableDetailPageComponent } from './table-detail-page/table-detail-page.component';
import { TissuePageComponent } from './tissue-page/tissue-page.component';
import { TablePageComponent } from './tissue-page/table-page/table-page.component';
import { CodePageComponent } from './organ-page/code-page/code-page.component';
import { LinkLogoPageComponent } from './cell-page/link-logo-page/link-logo-page.component';
import { LinkIconPageComponent } from './cell-page/link-icon-page/link-icon-page.component';
import { ButtonIconPageComponent } from './cell-page/button-icon-page/button-icon-page.component';
import { ButtonSubmitPageComponent } from './cell-page/button-submit-page/button-submit-page.component';
import { CardPageComponent } from './tissue-page/card-page/card-page.component';
import { BarPageComponent } from './tissue-page/bar-page/bar-page.component';
import { FooterPageComponent } from './tissue-page/footer-page/footer-page.component';
import { InputsPageComponent } from './tissue-page/inputs-page/inputs-page.component';
import { NavPageComponent } from './tissue-page/nav-page/nav-page.component';
import { PagePageComponent } from './tissue-page/page-page/page-page.component';

const routes: Routes = [
  { path: '', component: CellPageComponent, children:
    [
      {path: '', component: IconPageComponent},
      {path: "icon-link",component:IconLinkPageComponent},
      {path: "icon-button",component:IconButtonPageComponent},
      {path: "link",component:LinkPageComponent},
      {path: "link-icon",component:LinkIconPageComponent},
      {path: "link-logo",component:LinkLogoPageComponent},
      {path: "button",component:ButtonPageComponent},
      {path: "button-icon",component:ButtonIconPageComponent},
      {path: "button-submit",component:ButtonSubmitPageComponent},
      {path: "input",component:InputPageComponent}
    ]
  },
  { path: 'tissue', component: TissuePageComponent, children:
    [
      {path: "",component: BarPageComponent},
      {path: "card",component: CardPageComponent},
      {path: "table",component: TablePageComponent},
      {path: "footer",component: FooterPageComponent},
      {path: "input",component: InputsPageComponent},
      {path: "nav",component: NavPageComponent},
      {path: "page",component: PagePageComponent},
      {path: "table/:id",component: TableDetailPageComponent}
    ]
  },
  { path: 'organ', component: OrganPageComponent, children:
    [
      {path: "",component: LoginPageComponent},
      {path: "register",component: RegisterPageComponent},
      {path: "forget",component: ForgetPageComponent},
      {path: "reset",component: ResetPageComponent},
      {path: "code",component: CodePageComponent},
      {path: "crud",component: CrudPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
