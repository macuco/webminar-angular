import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  obtenerProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>("https://my-json-server.typicode.com/macuco/webminar-angular/productos")
  }

  obtenerProducto(id:number):Observable<Producto>{
    return this.http.get<Producto>("https://my-json-server.typicode.com/macuco/webminar-angular/productos/"+id)
  }
}
