import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MandarinComponent } from './components/mandarin/mandarin.component';


const routes: Routes = [{ path: 'mandarin', component: MandarinComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MandarinRoutingModule { }
