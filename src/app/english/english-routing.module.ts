import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnglishComponent } from './components/english/english.component';
import { AuthGuard } from "src/app/shared/services/auth.guard";


const routes: Routes = [{
  path: 'english',
  component: EnglishComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnglishRoutingModule { }
