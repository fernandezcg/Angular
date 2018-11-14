import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommentsComponent } from './comments/comments.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AboutComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
