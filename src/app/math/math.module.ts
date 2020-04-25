import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MathRoutingModule } from './math-routing.module';
import { MathComponent } from './components/math/math.component';
import { MathPlusUnitsComponent } from './components/math-plus-units/math-plus-units.component';
import { MathPlusTensComponent } from './components/math-plus-tens/math-plus-tens.component';
import { MathPlusQuizComponent } from './components/math-plus-quiz/math-plus-quiz.component';


@NgModule({
  declarations: [MathComponent,
    MathPlusUnitsComponent,
    MathPlusTensComponent,
    MathPlusQuizComponent],
  imports: [
    SharedModule,
    MathRoutingModule
  ]
})
export class MathModule { }
