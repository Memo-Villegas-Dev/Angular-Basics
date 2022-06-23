import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

  /* Defining the structure of the object that will be used in the array. */
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 39000
    },
    {
      nombre: 'Vegeta',
      poder: 20000
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {}

  agregarPersonaje(personaje: Personaje){
    this._personajes.push(personaje);
  }

}
