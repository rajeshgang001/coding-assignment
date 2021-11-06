import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempTrackerComponent } from './temp-tracker.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: TempTrackerComponent }
];

@NgModule({
  declarations: [TempTrackerComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})

export class TempTrackerModule { }
