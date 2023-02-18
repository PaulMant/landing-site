import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatrixDisplayerService {
  private displayMatrix = true;

  constructor() { }

  shouldDisplayMatrix(): boolean {
    return this.displayMatrix;
  }

  setDisplayMatrix(value: boolean): void {
    this.displayMatrix = value;
  }

  getDisplayMatrix(): boolean {
    return this.displayMatrix;
  }
}
