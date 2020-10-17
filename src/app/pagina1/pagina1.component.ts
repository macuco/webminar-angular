import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  productos:Producto[] = [];

  constructor(private productosService:ProductosService) { }

  ngOnInit(): void {
    this.productosService.obtenerProductos().subscribe(response =>{
      this.productos = response;
      console.log(response);
    })
  }

  cargarDetalle(id:number){
    this.productosService.obtenerProducto(id).subscribe(response=>{
      console.log(response);
    },
    error => {
      console.log("Aqui llega el error");
    })
  }

}
