import { Component} from '@angular/core';

/* A decorator that is used to define the metadata of the component. */
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

/* It has a heroes property that is an array of strings. It also has a heroeBorrado property that is a
string. It has a borrarHeroe method that removes the first element from the heroes array and assigns
it to the heroeBorrado property */
export class ListadoComponent {

  heroes: string[] = ['Flash', 'Batman', 'Superman', 'Green Lantern', 'Aquaman'];

  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
