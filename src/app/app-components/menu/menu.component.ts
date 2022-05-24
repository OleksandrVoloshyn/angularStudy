import {Component, OnInit} from '@angular/core';
import {ResolveEnd, ResolveStart, Router} from "@angular/router";
import {filter, Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loading$:Observable<boolean> = of(false)

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.loading$ = this.router.events.pipe(
      filter(e => e instanceof ResolveStart || e instanceof ResolveEnd),
      map(e => e instanceof ResolveStart)
    )
  }

}
