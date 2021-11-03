import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-tracker',
  templateUrl: './temp-tracker.component.html',
  styleUrls: ['./temp-tracker.component.css']
})

export class TempTrackerComponent implements OnInit {
  temperaturesArray = [];
  private min: number;
  private max: number;
  private mean: number;
  private mode: number;

  get minValue(): number {
    return this.min;
  }
  get maxValue(): number {
    return this.max;
  }
  get meanValue(): number {
    return this.mean;
  }
  get modeValue(): number {
    return this.mode;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onInsert(form: NgForm) {
    this.temperaturesArray.push(form.value.temperature);
    this.getMin();
    this.getMax();
    this.getMean();
    this.getMode();
    form.reset();
  }

  getMin() {
    this.min = Math.min(...this.temperaturesArray);
  }

  getMax() {
    this.max = Math.max(...this.temperaturesArray);
  }

  getMean() {
    let totalCount: number = this.temperaturesArray.length;
    let totalSum: number = 0;
    this.temperaturesArray.forEach((element: number) => {
      totalSum += element;
    });
    this.mean = totalSum / totalCount;
  }

  getMode() {
    this.mode = [...this.temperaturesArray].sort((a, b) =>
      this.temperaturesArray.filter(v => v === a).length
      - this.temperaturesArray.filter(v => v === b).length
    ).pop();
  }

  onReset() {
    this.temperaturesArray = [];
  }
}
