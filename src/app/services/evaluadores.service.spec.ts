import { TestBed } from '@angular/core/testing';

import { EvaluadoresService } from './evaluadores.service';

describe('EvaluadoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvaluadoresService = TestBed.get(EvaluadoresService);
    expect(service).toBeTruthy();
  });
});
