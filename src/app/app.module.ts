import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayerService } from './services/layer.service';
// import { ILayerService } from './interfaces/ILayerService'
import { AbstractLayerService } from './abstracts/AbstractLayerService';
import { AbstractMapService } from './abstracts/AbstractMapService';
import { MapService } from './services/map.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // { provide: ILayerService, useClass: LayerService }, // error
    // MapService, LayerService
    { provide: AbstractLayerService, useClass: LayerService },
    { provide: AbstractMapService, useClass: MapService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
