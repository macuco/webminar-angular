import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-cubilete',
  templateUrl: './cubilete.component.html',
  styleUrls: ['./cubilete.component.css']
})
export class CubileteComponent implements OnInit, OnDestroy {

  numero1:number = 2;
  numero2:number = 5;
  numero3:number = 3;

  constructor(private dadosService:DadosService) { }

  ngOnInit(): void {
    let numeros = this.dadosService.obtenerValoresDados();
    this.numero1 = numeros[0]
    this.numero2 = numeros[1]
    this.numero3 = numeros[2]
  }

  guardarDatos(){
    let numeros = [this.numero1, this.numero2, this.numero3];
    this.dadosService.ponerValores(numeros);
  }

  ngOnDestroy() {
    console.log("Se ha eliminado el componente");
  }

}
