import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MathematicsComponent } from './components/mathematics/mathematics.component';
import { MathTheoryComponent } from './components/math-theory/math-theory.component';
import { MathPlusUnitsComponent } from './components/math-plus-units/math-plus-units.component';
import { MathPlusTensComponent } from './components/math-plus-tens/math-plus-tens.component';
import { MathPlusQuizComponent } from './components/math-plus-quiz/math-plus-quiz.component';


const routes: Routes = [
  { path: 'math', component: MathematicsComponent },
  { path: 'math-theory', component: MathTheoryComponent },
  { path: 'math-units', component: MathPlusUnitsComponent },
  { path: 'math-tens', component: MathPlusTensComponent },
  { path: 'math-quiz', component: MathPlusQuizComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathematicsRoutingModule { }
