import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MathematicsComponent } from './components/mathematics/mathematics.component';
import { MathTheoryComponent } from './components/math-theory/math-theory.component';
import { MathPlusUnitsComponent } from './components/math-plus-units/math-plus-units.component';
import { MathPlusTensComponent } from './components/math-plus-tens/math-plus-tens.component';
import { MathPlusQuizComponent } from './components/math-plus-quiz/math-plus-quiz.component';
import { AuthGuard } from "src/app/shared/services/auth.guard";


const routes: Routes = [
  { path: 'math', component: MathematicsComponent, canActivate: [AuthGuard] },
  { path: 'math/theory', component: MathTheoryComponent, canActivate: [AuthGuard] },
  { path: 'math/units', component: MathPlusUnitsComponent, canActivate: [AuthGuard] },
  { path: 'math/tens', component: MathPlusTensComponent, canActivate: [AuthGuard] },
  { path: 'math/quiz', component: MathPlusQuizComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathematicsRoutingModule { }
