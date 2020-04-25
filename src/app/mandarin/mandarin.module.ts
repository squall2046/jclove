import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MandarinRoutingModule } from './mandarin-routing.module';
import { MandarinComponent } from './components/mandarin/mandarin.component';



@NgModule({
  declarations: [MandarinComponent],
  imports: [
    SharedModule,
    MandarinRoutingModule
  ]
})
export class MandarinModule { }
