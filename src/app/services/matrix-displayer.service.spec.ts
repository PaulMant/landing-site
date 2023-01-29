import { TestBed } from '@angular/core/testing';

import { MatrixDisplayerService } from './matrix-displayer.service';

describe('MatrixDisplayerService', () => {
  let service: MatrixDisplayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatrixDisplayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
