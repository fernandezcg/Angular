import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  url: string;

  constructor(public http: HttpClient) { 
    this.url = environment.apiComments;
  }

  findAll() {
    return this.http.get(this.url);
  }

  findById(id) {
    return this.http.get(`${this.url}/${id}`);
  }

  new(data) {
    return this.http.post(this.url, data);
  }

  update(id, data) {
    return this.http.put(`${this.url}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
