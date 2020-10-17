import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina3Component } from './pagina3/pagina3.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { CubileteComponent } from './cubilete/cubilete.component';

const routes: Routes = [
  { path: 'lista' , component : Pagina1Component},
  { path: 'home' , component : Pagina2Component},
  { path: 'pagina3' , component : Pagina3Component},
  { path: 'cubilete' , component : CubileteComponent},
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
