import { Component, OnInit, Input } from '@angular/core';

import { post } from './post.module';
@Component({
  selector: 'app-posts-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.scss']
})
export class PostsCardComponent implements OnInit {

  post: post;
  @Input('post')postIn: post;
  constructor() { }

  ngOnInit() {
    this.post = {
      name: this.postIn.name,
      topic: this.postIn.topic,
      content: this.postIn.content
    }
  }

}
