/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NoteCalculatorService } from './note-calculator.service';

describe('NoteCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteCalculatorService]
    });
  });

  it('should ...', inject([NoteCalculatorService], (service: NoteCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
