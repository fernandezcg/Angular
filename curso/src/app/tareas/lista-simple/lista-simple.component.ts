import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'iam-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit {

  tarea: Tarea;
  aTareas: Array<Tarea>;

  constructor() { }

  ngOnInit() {
    this.tarea = new Tarea();
    this.aTareas = [];
  }
  /*
   addTarea(tarea) {
    this.aTareas.push(tarea);
  }
  */
  addTarea() {

    // this.aTareas.push(this.tarea); // hay que clonar:
    // this.aTareas.push(JSON.parse(JSON.stringify(this.tarea))); // clonar chapuza
    this.aTareas.push(Object.assign({}, this.tarea)); // clonar ok
    this.tarea.nombre = '';

    console.log(this.aTareas);
  }
  borrarTarea(id) {
    this.aTareas.splice(id, 1);
    console.log(this.aTareas);
  }

}
