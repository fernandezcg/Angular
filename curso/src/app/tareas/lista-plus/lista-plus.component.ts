import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'iam-lista-plus',
  templateUrl: './lista-plus.component.html',
  styleUrls: ['./lista-plus.component.css']
})
export class ListaPlusComponent implements OnInit {

  aTareas: Array<Tarea>;

  constructor() { }

  ngOnInit() {
    this.aTareas = [];
  }

  addTarea(newTarea: Tarea) {
    this.aTareas.push(newTarea);
    console.dir(this.aTareas);
  }
  deleteTarea(num: number) {
    this.aTareas.splice(num, 1);
    console.dir(this.aTareas);
  }
}
