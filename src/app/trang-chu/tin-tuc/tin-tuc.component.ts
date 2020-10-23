import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.css'],
})
export class TinTucComponent implements OnInit {
  LoaiTinTuc: string = 'DienAnh';
  constructor() {}
  ChonLoaiTin(val): void {
    this.LoaiTinTuc = val;
  }
  ngOnInit(): void {}
}
