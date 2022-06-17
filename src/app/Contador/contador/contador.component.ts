import { Component } from '@angular/core';

/* A decorator. It is a function that modifies a class. */
@Component({
  selector: 'app-contador',
  template: `


    <h1>{{titulo}}</h1>
    <h3>La base es: <strong> 5 </strong></h3>

    <button (click)=" acumular(base) "> + {{base}} </button>

    <span> {{ numero }} </span>

    <button (click)=" acumular(-base) "> - {{base}} </button>

  `

})

/* The class is called ContadorComponent and it has a property called titulo, which is a string, and a
property called numero, which is a number */
export class ContadorComponent{
  titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 5;



  acumular( valor: number ){
    this.numero += valor;
  }
}
