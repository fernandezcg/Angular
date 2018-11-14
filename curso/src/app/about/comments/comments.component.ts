import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { Comment } from 'src/app/models/comment.model';

@Component({
  selector: 'iam-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  aComments: Array<Comment>;
  id: number;
  body: string;

  constructor(public service: CommentsService) { 
    
  }

  ngOnInit() {
    this.aComments = [];
    this.service.findAll().subscribe(
      (response: any) => this.aComments = response
    );
  }

  onShow() {
    if (!this.id) return;
    this.service.findById(this.id).subscribe(
      (response: any) => { this.aComments = response }
    );

  }
  onNew() {
    if (!this.body) return;
    this.service.new({ body: this.body }).subscribe(
    );
  }
  onDelete() {

  }
  onEdit() {

  }
}
