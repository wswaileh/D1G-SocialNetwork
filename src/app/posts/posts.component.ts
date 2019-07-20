import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: object;

  constructor(private _http: HttpService ) { }

  ngOnInit() {
    this._http.getPosts().subscribe(data => {
      console.log(data);
      this.posts = data;
    })
  }

}
