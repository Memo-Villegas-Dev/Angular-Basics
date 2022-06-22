import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  /* Defining the structure of the object that will be used in the array. */
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 39000
    },
    {
      nombre: 'Vegeta',
      poder: 20000
    }
  ];

  nuevo : Personaje = {
    nombre: "Roshi",
    poder: 3000
  }

}
