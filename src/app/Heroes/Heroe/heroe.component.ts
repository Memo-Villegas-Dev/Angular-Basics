import { Component } from "@angular/core";

/* A decorator that is used to define the metadata of the class. */
@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html"
})



/* The class HeroeComponent has a property called nombre, which is a string, and a property called
edad, which is a number. It also has a method called obtenerNombre, which returns a string, and two
methods called cambiarNombre and cambiarEdad, which return void */
export class HeroeComponent{

  nombre: string = "Aquaman";
  edad: number = 35;

  /**
   * The getter function is called when the property is accessed, and the setter function is called
   * when the property is assigned a value.
   * @returns The value of the nombre property.
   */
  get nombreCapitalizado():string {
    return this.nombre.toUpperCase();
  }

  /**
   * It returns a string with the name and age of the person.
   * @returns The string `${this.nombre} - ${this.edad}`
   */
  obtenerNombre(): string{
    return `${this.nombre} - ${this.edad}`;
  }

  /**
   * It changes the value of the variable nombre to Batman.
   */
  cambiarNombre(): void{
    this.nombre = 'Batman';
  }

  /**
   * The function cambiarEdad() is a void function that changes the value of the variable edad to 25.
   */
  cambiarEdad(): void{
    this.edad = 25;
  }
}
