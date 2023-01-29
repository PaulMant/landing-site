import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-a-propos-page',
  templateUrl: './a-propos-page.component.html',
  styleUrls: ['./a-propos-page.component.scss']
})
export class AProposPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToContact() {
    this.router.navigate(['contact']);
  }
}
