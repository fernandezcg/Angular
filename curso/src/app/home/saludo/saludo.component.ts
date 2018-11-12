import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iam-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  name: string;

  constructor() { }

  ngOnInit() {
    this.name = 'César';
  }

  btnBorrar() {
    this.name = '';
  }

}
