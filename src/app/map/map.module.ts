import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SelectionCriteriaComponent } from './selection-criteria/selection-criteria.component';
import { MapOverviewComponent } from './map-overview/map-overview.component';
import { TrackDetailsComponent } from './track-details/track-details.component';



@NgModule({
  declarations: [MapComponent, SelectionCriteriaComponent, MapOverviewComponent, TrackDetailsComponent],
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
  exports: [MapOverviewComponent]
})
export class MapModule { }
