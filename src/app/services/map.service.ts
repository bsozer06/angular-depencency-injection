import { Injectable } from '@angular/core';
import { AbstractLayerService } from '../abstracts/AbstractLayerService';
import { AbstractMapService } from '../abstracts/AbstractMapService';
import { ILayerService } from '../interfaces/ILayerService';
import { IMapService } from '../interfaces/IMapService';
import { LayerService } from './layer.service';
// import { IMapService } from '../interfaces/IMapService';

@Injectable({
  providedIn: 'root'
})
// export class MapService implements IMapService {
export class MapService extends AbstractMapService {

  constructor(private _layerService: AbstractLayerService) {
  // constructor(private _layerService: LayerService) {
    super();
    this.func_mapA();
    this.func_mapB();
  }

  override prop_mapA: any;
  override func_mapA() {
    console.log("in func_mapA: "), this._layerService.func_layerA();
  }
  override func_mapB() {
    console.log("in func_mapB: "), this._layerService.func_layerB();
  }
}
