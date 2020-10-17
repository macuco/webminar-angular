import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  valoresDados:number[] = [3,5,6];

  constructor() { }

  obtenerValoresDados():number[]{
    return this.valoresDados;
  }

  ponerValores(datos:number[]){
    this.valoresDados = datos;
  }
}
