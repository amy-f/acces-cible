import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  onCloseWindow() {
    this.display = false;
    this.onClose.emit(true);
  }

}
