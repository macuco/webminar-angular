import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modificando:boolean = false;
  productoActivo:Producto;
  productos:Producto[]=[]

  productoActual:Producto = new Producto();


  registrarProducto(){
    if(!this.modificando){
      this.productos.push(this.productoActual);
    }
    this.modificando = false;
    this.productoActual = new Producto();
  }

  modificarProducto(producto:Producto){
    this.modificando = true;
    this.productoActual = producto;
  }

  eliminarProducto(indice:number){
    this.productos.splice(indice,1);
  }
}


class Producto {
  id:number = 0;
  precio:number = 0;
  codigo:string
  cantidad:number;
  nombre:string;
  descripcion:string;
  productoActivo:boolean = false;
}

