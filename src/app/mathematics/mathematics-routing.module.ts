import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MathematicsComponent } from './components/mathematics/mathematics.component';
import { MathPlusUnitsComponent } from './components/math-plus-units/math-plus-units.component';
import { MathPlusTensComponent } from './components/math-plus-tens/math-plus-tens.component';
import { MathPlusQuizComponent } from './components/math-plus-quiz/math-plus-quiz.component';


const routes: Routes = [
  { path: 'math', component: MathematicsComponent },
  { path: 'math-plus-units', component: MathPlusUnitsComponent },
  { path: 'math-plus-tens', component: MathPlusTensComponent },
  { path: 'math-plus-quiz', component: MathPlusQuizComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathematicsRoutingModule { }
