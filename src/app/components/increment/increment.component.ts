import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [],
})
export class IncrementComponent implements OnInit {
  @Input('percent-unit') public _progress: number = 40;
  @Output() newPercetUnit: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  get progress() {
    return `${this._progress}%`;
  }

  changeValue(value: number) {
    if (this._progress >= 100 && value >= 0) {
      this.newPercetUnit.emit(100);
      return (this._progress = 100);
    }
    if (this._progress <= 0 && value < 0) {
      this.newPercetUnit.emit(0);
      return (this._progress = 0);
    }
    this.newPercetUnit.emit(this._progress + value);
    return (this._progress = this._progress + value);
  }
}
