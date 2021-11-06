import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-temp-tracker',
  templateUrl: './temp-tracker.component.html',
  styleUrls: ['./temp-tracker.component.css']
})

export class TempTrackerComponent implements OnInit {
  tempTrackerForm: FormGroup;
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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initTempTrackerForm();
  }

  initTempTrackerForm(): void {
    this.tempTrackerForm = this.fb.group({
      temperature: ['', [Validators.required, Validators.pattern('^(150|1[0-4][0-9]|0?[0-9]{1,2})')]],
    });
  }

  get controls(): any {
    return this.tempTrackerForm.controls;
  }

  onInsert(): void {
    this.temperaturesArray.push(this.tempTrackerForm.controls.temperature.value);
    this.getMin();
    this.getMax();
    this.getMean();
    this.getMode();
    this.tempTrackerForm.reset();
  }

  getMin(): void {
    this.min = Math.min(...this.temperaturesArray);
  }

  getMax(): void {
    this.max = Math.max(...this.temperaturesArray);
  }

  getMean(): void {
    const totalCount: number = this.temperaturesArray.length;
    let totalSum = 0;
    this.temperaturesArray.forEach((element: number) => {
      totalSum += element;
    });
    this.mean = totalSum / totalCount;
  }

  getMode(): void {
    this.mode = [...this.temperaturesArray].sort((a, b) =>
      this.temperaturesArray.filter(v => v === a).length
      - this.temperaturesArray.filter(v => v === b).length
    ).pop();
  }

  onReset(): void {
    this.temperaturesArray = [];
    this.tempTrackerForm.reset();
  }
}
