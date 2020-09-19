import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'webminar-angular';
  precio1:number = 50.50
  precio2:number = 30.25
  productoActivo:boolean = true;
  productos:string[] = ["producto 1", "producto2", "producto3"]

  sumarProductos(){
    return this.precio1+this.precio2;
  }

  eventoBoton(){
    this.productoActivo = !this.productoActivo;
  }
}


class Producto {
  title:string = '';
  precio1:number = 0
  precio2:number = 0
  productoActivo:boolean = false;
  productos:string[] = []
}

