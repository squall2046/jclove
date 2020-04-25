import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EnglishRoutingModule } from './english-routing.module';
import { EnglishComponent } from './components/english/english.component';



@NgModule({
  declarations: [EnglishComponent],
  imports: [
    SharedModule,
    EnglishRoutingModule
  ]
})
export class EnglishModule { }
