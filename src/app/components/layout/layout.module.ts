import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'anagram-tester', loadChildren: () => import('../anagram-tester/anagram-tester.module').then(m => m.AnagramTesterModule) },
      { path: 'temp-tracker', loadChildren: () => import('../temp-tracker/temp-tracker.module').then(m => m.TempTrackerModule) }
    ]
  }
];

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LayoutModule { }
