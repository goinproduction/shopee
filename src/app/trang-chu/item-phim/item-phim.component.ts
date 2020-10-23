import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.css'],
})
export class ItemPhimComponent implements OnInit {
  @Input() ItemPhim;
  constructor() {}

  ngOnInit(): void {}
}
