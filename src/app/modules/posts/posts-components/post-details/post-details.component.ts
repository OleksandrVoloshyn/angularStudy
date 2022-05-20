import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPost} from "../../../../models";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetailsObj: IPost;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({postData}) => this.postDetailsObj = postData as IPost)
  } 

}
