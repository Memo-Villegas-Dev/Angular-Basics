import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})

export class AgregarComponent {

  @Input() personajes : Personaje[] = [];

    /* Creating a new object with the same structure as the one in the array. */
    @Input () nuevo: Personaje = {
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
      this.nuevo = { nombre: '', poder: 0 }

      console.log(this.personajes);
    }

}
