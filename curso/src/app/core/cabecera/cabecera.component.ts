import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iam-cabecera',
  templateUrl: './cabecera.component.html',
  // template: '<h1>Cabecera</h1>',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  title: string;
  logo: string;

  constructor() { }

  ngOnInit() {
    // El componente ya está renderizado (tenemos acceso al dom)
    this.title = 'curso';
    this.logo = '../../assets/logo.svg';
  }

}
