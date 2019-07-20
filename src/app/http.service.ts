import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { post } from './posts-card/post.module';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get('http://localhost:3000/api/posts',{headers:
    new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'MyClientCert': '',        // This is empty
        'MyToken': ''              // This is empty
      }
    )});
  }

  addPost(post : post){
    return this.http.post('http://localhost:3000/api/posts',post,{headers:
    new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'MyClientCert': '',        // This is empty
        'MyToken': ''              // This is empty
      }
    )});
  }
}
