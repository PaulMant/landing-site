import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-redirect-to-contact',
  templateUrl: './redirect-to-contact.component.html',
  styleUrls: ['./redirect-to-contact.component.scss']
})
export class RedirectToContactComponent implements OnInit {
  isHovered = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  setHover($event: MouseEvent):void {
    this.isHovered = $event.type === 'mouseover';
  }

  goToContact() {
    this.router.navigate(['./contact']);
  }
}
