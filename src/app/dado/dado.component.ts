import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  @Input() numero:number = 1;

  @Output() onLanzado = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cambiaNumero(){
    this.numero = Math.round(Math.random()*5+1);
    this.onLanzado.emit(this.numero);
  }

}
