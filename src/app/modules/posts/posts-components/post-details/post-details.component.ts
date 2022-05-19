import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PostsDataService} from "../../posts-services/posts-data.service";
import {IPost} from "../../../../models";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetailsObj: IPost;

  constructor(private postsDataService:PostsDataService, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      const post = history.state?.data
      if(post){
        this.postDetailsObj = post
      }else {
        this.postsDataService.getById(id).subscribe(value => this.postDetailsObj = value)
      }
    })
  }

}
