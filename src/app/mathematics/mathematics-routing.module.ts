import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MathematicsComponent } from './components/mathematics/mathematics.component';
import { MathBookComponent } from './components/math-book/math-book.component';
import { MathPlusUnitsComponent } from './components/math-plus-units/math-plus-units.component';
import { MathPlusTensComponent } from './components/math-plus-tens/math-plus-tens.component';
import { MathPlusQuizComponent } from './components/math-plus-quiz/math-plus-quiz.component';


const routes: Routes = [
  { path: 'math', component: MathematicsComponent },
  { path: 'math-book', component: MathBookComponent },
  { path: 'math-units', component: MathPlusUnitsComponent },
  { path: 'math-tens', component: MathPlusTensComponent },
  { path: 'math-quiz', component: MathPlusQuizComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathematicsRoutingModule { }
