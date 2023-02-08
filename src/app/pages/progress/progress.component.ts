import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent implements OnInit {
  _progress1: number = 25;
  _progress2: number = 35;
  constructor() {}

  ngOnInit(): void {}

  public get progress1(): string {
    return `${this._progress1}%`;
  }
  public get progress2(): string {
    return `${this._progress2}%`;
  }

  changePercentage(newPercetUnit: number) {
    this._progress1 = newPercetUnit
  }
}
