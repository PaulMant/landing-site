import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-matrix-effect',
  templateUrl: './matrix-effect.component.html',
  styleUrls: ['./matrix-effect.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        opacity: '1',
        overflow: 'hidden',
      })),
      state('out', style({
        overflow: 'hidden',
        opacity:0
      })),
      transition('in => out', animate('3000ms ease-in-out')),
      transition('out => in', animate('3000ms ease-in-out'))
    ])
  ]
})
export class MatrixEffectComponent implements OnInit {
  hideProgressive='';

  constructor() {

  }

  async ngOnInit(): Promise<void> {
    this.displayMatrix();
    await new Promise(f => setTimeout(f, 1000));
    this.hideProgressive='out';

  }

  private displayMatrix() {
    this.hideProgressive='in';
    const canvas = <HTMLCanvasElement> document.getElementById('canv');
    const ctx = canvas!.getContext('2d');

    const w = canvas!.width = document.body.offsetWidth;
    const h = canvas!.height = document.body.offsetHeight;
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);

    ctx!.fillStyle = '#000';
    ctx!.fillRect(0, 0, w, h);

    function matrix () {
      ctx!.fillStyle = '#0001';
      ctx!.fillRect(0, 0, w, h);

      ctx!.fillStyle = '#0f0';
      ctx!.font = '15pt monospace';

      ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx!.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 20;
      });
    }

    setInterval(matrix, 50);
  }

}
