import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  top = true;
  home = false;

  constructor() {}
  cambiarSeccion(seccion: string) {
    switch(seccion){
      case "home":
        this.top = false;
        this.home = true;
        break;

      case "top":
        this.top = true;
        this.home = false;
        break;

    }

  }
}
