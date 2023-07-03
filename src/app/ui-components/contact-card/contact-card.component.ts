import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactCardComponent implements OnInit {
  @Input() text: string;
  @Input() logo: string;
  @Input() link: string;

  constructor() { }

  ngOnInit(): void {}

}
