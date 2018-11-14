import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'iam-buscar-plus',
  templateUrl: './buscar-plus.component.html',
  styleUrls: ['./buscar-plus.component.css']
})
export class BuscarPlusComponent implements OnInit {

  clave: string;
  aLibros: Array<string>;

  constructor(public librosService: LibrosService) { 

  }

  ngOnInit() {
    this.aLibros = [];
  }

  onBuscar() {
    if (!this.clave) return;
    this.librosService.getLibros(this.clave).subscribe(
      (response: any) => { 
        console.log(response);
        this.aLibros = response.items.map(
          (item) => item.volumeInfo.title
        );
       }
    );
  }
}
