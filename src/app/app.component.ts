import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <img [src] = "imagenURL"/><br/>
   <button [disabled] = "botonStatus">Mi Boton</button><br/>
   <button [class.activo] = "isActive">El Boton</button>
  `,
  styles: [`
    .activo{
      color: green;
    }
  `]
})
export class AppComponent {

  imagenURL = "http://lorempixel.com/400/200";
  botonStatus = true;
  isActive = true;
}
