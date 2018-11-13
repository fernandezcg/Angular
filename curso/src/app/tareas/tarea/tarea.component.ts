import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'iam-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  @Input() tarea: Tarea;
  @Input() num: number;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDelete: EventEmitter<number>;

  constructor() {
    this.onDelete = new EventEmitter();
  }

  ngOnInit() {
  }

  sendBorrarTarea() {
    this.onDelete.next(this.num);
  }
}
