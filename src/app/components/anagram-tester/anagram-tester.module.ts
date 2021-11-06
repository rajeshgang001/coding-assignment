import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnagramTesterComponent } from './anagram-tester.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: AnagramTesterComponent }
];

@NgModule({
  declarations: [AnagramTesterComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})

export class AnagramTesterModule { }
