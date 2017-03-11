import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NoteCalculatorService } from '../service/note-calculator.service';

@Component({
  selector: 'app-page-settings',
  templateUrl: './page-settings.component.html',
  styleUrls: ['./page-settings.component.css']
})
export class PageSettingsComponent implements OnInit {

  @Input()
  display = false;

  @Output()
  onClose = new EventEmitter<boolean>();

  coeff: any;

  constructor(
    private noteCalcultor: NoteCalculatorService
  ) { }

  ngOnInit() {
    this.coeff = this.noteCalcultor.getCoeff();
  }

  onCloseWindow() {
    this.display = false;
    this.onClose.emit(true);
  }

}
