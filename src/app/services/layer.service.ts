import { Injectable } from '@angular/core';
import { AbstractLayerService } from '../abstracts/AbstractLayerService';
import { AbstractMapService } from '../abstracts/AbstractMapService';
import { ILayerService } from '../interfaces/ILayerService';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root'
})
// export class LayerService implements ILayerService {
export class LayerService extends AbstractLayerService {

  constructor(private _mapService: AbstractMapService) {
  // constructor(private _mapService: MapService) {
    super();
    this.func_layerA();
    this.func_layerB();
   }

  override prop_layerA: any;

  override func_layerA() {
    console.log("in func_layerA: ", this._mapService.func_mapA());
  }
  override func_layerB() {
    console.log("in func_layerB: ",  this._mapService.func_mapB());
  }

}
