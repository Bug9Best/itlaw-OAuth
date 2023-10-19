import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNGModule } from './modules/primeng.module';
import { MessageService, ConfirmationService } from 'primeng/api';
import { SigninComponent } from './page/signin/signin.component';
import { SignupComponent } from './page/signup/signup.component';
import { HomeComponent } from './page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNGModule
  ],
  providers: [
    MessageService,
    ConfirmationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
