import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//angular routing
import { AppRoutingModule } from './app-routing.module';
//components
import { AppComponent } from './app.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './navbar/navbar.component';
//bootstrap
import { BootstrapModule } from './ngx-bootstrap';
import { PostsCardComponent } from './posts-card/posts-card.component';
import { FormsModule } from '@angular/forms';

import {  HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AddNewPostComponent,
    PostsComponent,
    NavbarComponent,
    PostsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
