import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlippingCardComponent } from './ui-components/flipping-card/flipping-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalLoaderComponent } from './ui-components/global-loader/global-loader.component';
import { ChangingTextComponent } from './ui-components/changing-text/changing-text.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    FlippingCardComponent,
    GlobalLoaderComponent,
    ChangingTextComponent,
    WelcomePageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
