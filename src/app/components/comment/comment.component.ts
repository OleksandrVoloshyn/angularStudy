import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: IComment

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  getDetails(): void {
    this.router.navigate(['comments-details' + '/' + this.comment.id], {
      relativeTo: this.activatedRoute,
      state: {comment: this.comment}
    })
  }
}
