import {Component, OnInit} from '@angular/core';
import {IComment} from "../../../../models";
import {ActivatedRoute} from "@angular/router";
import {CommentsDataService} from "../../comments-services/comments-data.service";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetailsObj: IComment

  constructor(private activatedRoute: ActivatedRoute, private commentsDataService: CommentsDataService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const comment = history.state?.data
      if (comment) {
        this.commentDetailsObj = comment
      } else {
        this.commentsDataService.getById(id).subscribe(value => this.commentDetailsObj = value)
      }
    })
  }

}
