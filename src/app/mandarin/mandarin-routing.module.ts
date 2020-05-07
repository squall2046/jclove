import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MandarinComponent } from './components/mandarin/mandarin.component';
import { AuthGuard } from "src/app/shared/services/auth.guard";


const routes: Routes = [{
  path: 'mandarin',
  component: MandarinComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MandarinRoutingModule { }
