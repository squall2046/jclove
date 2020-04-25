import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnglishComponent } from './components/english/english.component';


const routes: Routes = [{ path: 'english', component: EnglishComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnglishRoutingModule { }
