import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
// import { HomeModule } from './home/home.module';
// import { AboutModule } from './about/about.module';
// import { TareasModule } from './tareas/tareas.module';
// import { ContactosModule } from './contactos/contactos.module';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';


// the second parameter 'es' is optional
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    CoreModule// ,
    // ContactosModule,
    // HomeModule,
    // AboutModule,
    // TareasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
