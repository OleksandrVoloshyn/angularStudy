import {Component, OnInit} from '@angular/core';
import {IPost} from "../../../../models";
import {PostsDataService} from "../../posts-services/posts-data.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[];

  constructor(private postsDataService: PostsDataService) {
  }

  ngOnInit(): void {
    this.postsDataService.getAll().subscribe(value => this.posts = value)
  }

}
