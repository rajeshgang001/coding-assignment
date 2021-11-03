import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: "register", component: RegisterComponent, pathMatch: 'full' },
  { path: "actions", loadChildren: () => import('./components/layout/layout.module').then(m => m.LayoutModule) },
  { path: '**', redirectTo: '/register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
