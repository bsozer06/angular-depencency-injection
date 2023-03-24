import { Component } from '@angular/core';
import { LayerService } from './services/layer.service';
import { MapService } from './services/map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'di-by-interface';

  constructor(
    private layerService: LayerService,
    // private mapService: MapService
    ) {
      layerService.func_layerA();
      layerService.func_layerB();
      // mapService.func_mapA();
      // mapService.func_mapB();
    }
}
