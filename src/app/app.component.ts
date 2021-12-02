import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ISI';

  constructor(){
  }

  ngOnInit(): void {
    this.cargarCombo();
    
    
  }

  provincias = ["Salta","JUJUY","cordoba"]

  
  cargarCombo(){

    let DOMLocalidad = document.getElementById("localidades");
    this.provincias.forEach(element => {
      var option = document.createElement("option");

      option.appendChild(new Option(element.toUpperCase(), element.toLowerCase()))
      DOMLocalidad?.appendChild(option)

    });
  }
  
}
