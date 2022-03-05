import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'approyecto';
  agregarEnlace(title:HTMLInputElement,link:HTMLInputElement){
    console.log("values:",title.value,link.value);
    return false; // cancela el evento de resfrescar la pagina
}
}
