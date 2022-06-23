import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})

export class AgregarComponent {


    /* Creating a new variable called nuevo, which is of type Personaje, and it is setting the default
    values for the nombre and poder properties. */
    @Input () nuevo: Personaje = {
      nombre: '',
      poder: 0
    }

    constructor( private DbzService: DbzService){}

    //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

    /**
     * If the name is empty, don't do anything; otherwise, add the new character to the list
     * @returns the value of the variable nuevo.
     */
    agregar() {
      if (this.nuevo.nombre.trim().length == 0) { return; }

      //this.onNuevoPersonaje.emit( this.nuevo );
      this.DbzService.agregarPersonaje(this.nuevo);

      this.nuevo = {
        nombre:'',
        poder: 0
      }

    }

}
