import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MathematicsRoutingModule } from './mathematics-routing.module';
import { MathematicsComponent } from './components/mathematics/mathematics.component';
import { MathTheoryComponent } from './components/math-theory/math-theory.component';
import { MathPlusUnitsComponent } from './components/math-plus-units/math-plus-units.component';
import { MathPlusTensComponent } from './components/math-plus-tens/math-plus-tens.component';
import { MathPlusQuizComponent } from './components/math-plus-quiz/math-plus-quiz.component';


@NgModule({
  declarations: [
    MathematicsComponent,
    MathTheoryComponent,
    MathPlusUnitsComponent,
    MathPlusTensComponent,
    MathPlusQuizComponent,
  ],
  imports: [
    SharedModule,
    MathematicsRoutingModule
  ]
})
export class MathematicsModule { }
