import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iam-pie',
  template: `
    <footer  class="row">
      <address class="col-12">{{empresa}} - {{lugar}}</address>
    </footer>
  `,
  styles: []
})

export class PieComponent implements OnInit {

  lugar: string;
  empresa: string;

  constructor() { }

  ngOnInit() {
    this.lugar = 'Madrid';
    this.empresa = 'Informática del Ayuntamiento';
  }

}
