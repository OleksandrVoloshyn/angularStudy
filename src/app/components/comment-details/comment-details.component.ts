import {Component, OnInit} from '@angular/core';
import {IComment} from "../../models";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetailsObj: IComment

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(() => {
      this.commentDetailsObj = history.state.data as IComment
    })
  }

  ngOnInit(): void {
  }

}
