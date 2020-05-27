import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.sass']
})
export class BadgeComponent implements OnInit {
  @Input() color
  constructor() { }

  ngOnInit(): void {
  }

}
