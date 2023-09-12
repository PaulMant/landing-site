import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('flagAnimation', [
      state('active', style({ transform: 'rotate(0deg)' })),
      transition('void => active', [
        style({ transform: 'rotate(0deg)' }),
        animate('300ms ease-out', style({ transform: 'rotate(180deg)' })),
      ]),
    ]),
  ],
})
export class HeaderComponent {

  isLanguageMenuOpen: boolean = false;
  currentLanguage = 'English';
  flagUrl: string = 'assets/images/uk-flag.webp';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
  ];

  constructor(private translate: TranslateService) { }
  toggleLanguage(): void {
    if (this.currentLanguage === 'English') {
      this.translate.use('fr');
      this.currentLanguage = 'Français';
      this.flagUrl = 'assets/images/fr.png';
    } else {
      this.translate.use('en');
      this.currentLanguage = 'English';
      this.flagUrl = 'assets/images/uk-flag.webp';
    }
  }

}
