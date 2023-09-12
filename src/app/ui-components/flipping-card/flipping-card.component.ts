import {Component, Input, OnInit} from '@angular/core';
import {Experience} from "../../interfaces/experience";


@Component({
  selector: 'app-flipping-card',
  templateUrl: './flipping-card.component.html',
  styleUrls: ['./flipping-card.component.scss'],
})
export class FlippingCardComponent {
  @Input() experience: Experience;

}
