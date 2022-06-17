import { Component} from '@angular/core';

/* Defining the structure of the object that will be used in the array. */
interface Personaje {
  nombre: string;
  poder: number;
}

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

  /* Creating a new object with the same structure as the one in the array. */
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  /**
   * If the name is empty, don't do anything; otherwise, add the new character to the list
   * @returns the value of the variable nuevo.
   */
  agregar() {
    if (this.nuevo.nombre.trim().length == 0) { return; }

    console.log(this.nuevo);

    this.personajes.push(this.nuevo);
    this.nuevo = { nombre: '', poder: 0 };
  }

}
