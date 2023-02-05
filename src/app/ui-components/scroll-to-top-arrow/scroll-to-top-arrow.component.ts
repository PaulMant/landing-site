import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-scroll-to-top-arrow',
  templateUrl: './scroll-to-top-arrow.component.html',
  styleUrls: ['./scroll-to-top-arrow.component.scss']
})
export class ScrollToTopArrowComponent implements OnInit {
  windowScrolled = false;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset > 20;
    });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

}
