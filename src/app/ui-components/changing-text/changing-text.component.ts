import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";
import { animate, style, transition, trigger } from '@angular/animations';


//TODO : Déplacer dans un fichier JSON avec un service de lecture de conf.
const WORDS = [
  'Créer une application Web ou Mobile',
  'Atteindre vos objectifs',
  'Proposer des solutions en UI/UX Design',
  'Encadrer une équipe de développeurs',
  'Réduire votre dette technique',
  'Améliorer la qualité de code',
  'Ajouter des fonctionalités',
  'Besoin d\'un renfort expérimenté',
  'Architecturer et développer une idée'
];

export const fadeInOutTimeout = 250;
export const fadeInOut = trigger('fadeInOut', [
  transition('void => *', [style({ opacity: '0', transform: 'translateX(-10%)' }), animate(fadeInOutTimeout)]),
  transition('* => void', [animate(fadeInOutTimeout, style({ opacity: '0' }))]),
  transition('* => *', [
    style({ opacity: '0', transform: 'translateX(-10%)' }),
    animate(fadeInOutTimeout, style({ opacity: '1', transform: 'translateX(0%)' })),
  ]),
]);

const source = interval(3000);

@Component({
  selector: 'app-changing-text',
  templateUrl: './changing-text.component.html',
  styleUrls: ['./changing-text.component.scss'],
  animations: [fadeInOut],
})
export class ChangingTextComponent implements OnInit, OnDestroy {
  private i = 0;
  public displayedText: string = WORDS[this.i];
  private subscription: Subscription;
  private intervalId: number;


  constructor() { }

  ngOnInit(): void {
    this.subscription = source.subscribe(val => this.displayNextWord()) ;
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();

    clearInterval(this.intervalId);
  }

  displayNextWord() {
    this.i++;
    this.displayedText = WORDS[this.i % WORDS.length];
  }

}
