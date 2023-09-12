import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-auto-scrolling-text',
  templateUrl: './auto-scrolling-text.component.html',
  styleUrls: ['./auto-scrolling-text.component.scss']
})
export class AutoScrollingTextComponent implements OnInit {
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
    console.log('text : ', this.text);
  }

}
