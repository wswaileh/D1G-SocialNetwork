import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component'
const routes: Routes = [
  {path: '' , component: PostsComponent },
  {path: 'newpost' , component : AddNewPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
