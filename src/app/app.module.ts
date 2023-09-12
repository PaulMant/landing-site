import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlippingCardComponent } from './ui-components/flipping-card/flipping-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangingTextComponent } from './ui-components/changing-text/changing-text.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactCardComponent } from './ui-components/contact-card/contact-card.component';
import {MatIconModule} from "@angular/material/icon";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import { FooterComponent } from './footer/footer.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { FormationsSectionComponent } from './formations-section/formations-section.component';
import { TechSkillsListComponent } from './ui-components/tech-skills-list/tech-skills-list.component';
import {MatLegacyListModule as MatListModule} from "@angular/material/legacy-list";
import { AProposPageComponent } from './pages/a-propos-page/a-propos-page.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { MatrixEffectComponent } from './ui-components/matrix-effect/matrix-effect.component';
import { ContactButtonComponent } from './ui-components/contact-button/contact-button.component';
import { AutoScrollingTextComponent } from './ui-components/auto-scrolling-text/auto-scrolling-text.component';
import { ScrollToTopArrowComponent } from './ui-components/scroll-to-top-arrow/scroll-to-top-arrow.component';
import { DownloadButtonComponent } from './ui-components/download-button/download-button.component';
import { RedirectToContactComponent } from './ui-components/redirect-to-contact/redirect-to-contact.component';
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";
import { NgOptimizedImage } from '@angular/common';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        TranslateModule.forRoot({
          defaultLanguage: 'fr',
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
        }),
        AppRoutingModule,
        NgOptimizedImage,
        BrowserAnimationsModule,
        MatToolbarModule,
        HttpClientModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatSidenavModule,
        MatCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
