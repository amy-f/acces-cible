import { Component, OnInit, Input } from '@angular/core';

import { MapSettingsToggle } from '../page-resultat/page-resultat.component';

@Component({
  selector: 'app-map-settings',
  templateUrl: './map-settings.component.html',
  styleUrls: ['./map-settings.component.css']
})
export class MapSettingsComponent implements OnInit {

  @Input() mapSettingsToggle: MapSettingsToggle;

  constructor() {}

   ngOnInit() {}

  onToggleBus(event) {
    this.mapSettingsToggle.toggleBus = event.checked;
  }

  onToggleWalk(event) {
    this.mapSettingsToggle.toggleWalk = event.checked;
  }

  onToggleMetro(event) {
    this.mapSettingsToggle.toggleMetro = event.checked;
  }

  onToggleBike(event) {
    this.mapSettingsToggle.toggleBike = event.checked;
  }

}
