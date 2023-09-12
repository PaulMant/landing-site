import {Component} from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'Paul Mantello';

  public browserLang: string = '';
  public currentLang: string = '';

  firebaseConfig = {
    apiKey: "AIzaSyBXsbCflkQI728fZ0Qeu8WSL5aGK4eb_Bo",
    authDomain: "paul-mantello-consulting.firebaseapp.com",
    projectId: "paul-mantello-consulting",
    storageBucket: "paul-mantello-consulting.appspot.com",
    messagingSenderId: "974967987583",
    appId: "1:974967987583:web:9808a69d4a469390068e4a",
    measurementId: "G-R829700J14"
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);

  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "fr"]);
    const userLang = navigator.language;
    translate.setDefaultLang((userLang[0] + userLang[1]).toLowerCase());

    this.browserLang = (userLang[0] + userLang[1]).toLowerCase() ?? 'en';
    translate.use(this.browserLang.match(/en|de|fr/) ? this.browserLang : 'en');
    this.currentLang = this.translate.currentLang;
  }


}
