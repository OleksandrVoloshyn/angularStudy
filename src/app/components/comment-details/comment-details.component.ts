import {Component, OnInit} from '@angular/core';
import {IComment} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../services";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetailsObj: IComment

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private commentService: CommentService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['comment'] as IComment
      if(state){
        this.commentDetailsObj = state
      }else {
        this.commentService.getById(id).subscribe(value => this.commentDetailsObj = value)
      }
    })
  }

}
