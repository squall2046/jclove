import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNoFoundComponent } from './shared/components/page-no-found/page-no-found.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: '404', component: PageNoFoundComponent },
  // { path: '**', component: PageNoFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
