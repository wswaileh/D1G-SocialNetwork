import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { post } from '../posts-card/post.module';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.scss']
})
export class AddNewPostComponent implements OnInit {

  constructor(private _http: HttpService) { }

  newPost: post;
  

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.newPost = new post();
    this.newPost.name = form.value['name'];
    this.newPost.content = form.value['content'];
    this.newPost.topic = form.value['topic'];
    console.log(this.newPost);
    this._http.addPost(this.newPost).subscribe(post =>{
      form.reset();
    });
  }

}
