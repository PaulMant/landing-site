import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FormationsSectionComponent } from './formations-section/formations-section.component';
import { HeaderComponent } from './header/header.component';
import { AProposPageComponent } from './pages/a-propos-page/a-propos-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { AutoScrollingTextComponent } from './ui-components/auto-scrolling-text/auto-scrolling-text.component';
import { ChangingTextComponent } from './ui-components/changing-text/changing-text.component';
import { ContactButtonComponent } from './ui-components/contact-button/contact-button.component';
import { ContactCardComponent } from './ui-components/contact-card/contact-card.component';
import { DownloadButtonComponent } from './ui-components/download-button/download-button.component';
import { FlippingCardComponent } from './ui-components/flipping-card/flipping-card.component';
import { MatrixEffectComponent } from './ui-components/matrix-effect/matrix-effect.component';
import { RedirectToContactComponent } from './ui-components/redirect-to-contact/redirect-to-contact.component';
import { ScrollToTopArrowComponent } from './ui-components/scroll-to-top-arrow/scroll-to-top-arrow.component';
import { TechSkillsListComponent } from './ui-components/tech-skills-list/tech-skills-list.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    FlippingCardComponent,
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
    ScrollToTopArrowComponent,
    DownloadButtonComponent,
    RedirectToContactComponent,
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
        TranslateModule.forRoot({
          defaultLanguage: 'fr',
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
        }),
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
