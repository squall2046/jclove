import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MathComponent } from './components/math/math.component';


const routes: Routes = [{ path: 'math', component: MathComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathRoutingModule { }
