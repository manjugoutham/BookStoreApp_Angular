import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { WelcomepageComponent } from './component/welcomepage/welcomepage.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { AllOrederListComponent } from './component/all-oreder-list/all-oreder-list.component';
import { OrederSummaryComponent } from './component/oreder-summary/oreder-summary.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { LoginComponent } from './component/login/login.component';
import { OrderplacedComponent } from './component/orderplaced/orderplaced.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomepageComponent,
    ForgotComponent,
    ResetPasswordComponent,
    AllOrederListComponent,
    HomepageComponent,
    OrederSummaryComponent,
    SignUpComponent,
    LoginComponent,
    OrederSummaryComponent,
    OrderplacedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
