import {Component, OnInit} from '@angular/core';

import {IComment} from "../../../../models";
import {CommentsDataService} from "../../comments-services";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment[]

  constructor(private commentsDataService: CommentsDataService) {
  }

  ngOnInit(): void {
    this.commentsDataService.getAll().subscribe(value => this.comments = value)
  }

}
