import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOrederListComponent } from './component/all-oreder-list/all-oreder-list.component';
import { CartComponent } from './component/cart/cart.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { WelcomepageComponent } from './component/welcomepage/welcomepage.component';
import {ForgotComponent} from './component/forgot/forgot.component';
import { OrederSummaryComponent } from './component/oreder-summary/oreder-summary.component';
import { OrderplacedComponent } from './component/orderplaced/orderplaced.component';

const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path:'homepage',component: HomepageComponent},
  { path:'signup',component: SignUpComponent},
  { path:'login',component: LoginComponent},
  { path:'cart',component: CartComponent},
  { path:'header',component: HeaderComponent},
  { path:'footer',component: FooterComponent},
  { path:'welcome',component: WelcomepageComponent},
  { path:'orderlist',component: AllOrederListComponent},
  {path:'forgotpwd',component: ForgotComponent},
  {path: 'order', component: OrederSummaryComponent},
  {path: 'orderplaced', component: OrderplacedComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
