import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DadoComponent } from './dado/dado.component';
import { CubileteComponent } from './cubilete/cubilete.component';

@NgModule({
  declarations: [
    AppComponent,
    DadoComponent,
    CubileteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
