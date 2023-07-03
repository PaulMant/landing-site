import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToContact() {
    this.router.navigate(['contact']);
  }

}
