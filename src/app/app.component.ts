import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  verNumero(numeroDado:number){
    console.log("El valor es ", numeroDado);
  }
}

