import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'iam-new-tarea',
  templateUrl: './new-tarea.component.html',
  styleUrls: ['./new-tarea.component.css']
})
export class NewTareaComponent implements OnInit {

  tarea: Tarea;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onTarea: EventEmitter<Tarea>;

  constructor() {
    this.onTarea = new EventEmitter();
   }

  ngOnInit() {
    this.tarea = new Tarea();
  }

  sendAddTarea() {
    this.onTarea.next(Object.assign({}, this.tarea));
    this.tarea.nombre = '';
  }

}
