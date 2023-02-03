import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlippingCardComponent } from './ui-components/flipping-card/flipping-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalLoaderComponent } from './ui-components/global-loader/global-loader.component';
import { ChangingTextComponent } from './ui-components/changing-text/changing-text.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactCardComponent } from './ui-components/contact-card/contact-card.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { FooterComponent } from './footer/footer.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { FormationsSectionComponent } from './formations-section/formations-section.component';
import { TechSkillsListComponent } from './ui-components/tech-skills-list/tech-skills-list.component';
import {MatListModule} from "@angular/material/list";
import { AProposPageComponent } from './pages/a-propos-page/a-propos-page.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { MatrixEffectComponent } from './ui-components/matrix-effect/matrix-effect.component';
import { ContactButtonComponent } from './ui-components/contact-button/contact-button.component';
import { AutoScrollingTextComponent } from './ui-components/auto-scrolling-text/auto-scrolling-text.component';


@NgModule({
  declarations: [
    AppComponent,
    FlippingCardComponent,
    GlobalLoaderComponent,
    ChangingTextComponent,
    WelcomePageComponent,
    HeaderComponent,
    ContactPageComponent,
    ContactCardComponent,
    FooterComponent,
    SkillsSectionComponent,
    FormationsSectionComponent,
    TechSkillsListComponent,
    AProposPageComponent,
    MatrixEffectComponent,
    ContactButtonComponent,
    AutoScrollingTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
