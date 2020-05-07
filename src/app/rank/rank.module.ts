import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RankRoutingModule } from './rank-routing.module';
import { RankingComponent } from './ranking/ranking.component';



@NgModule({
  declarations: [RankingComponent],
  imports: [
    SharedModule,
    RankRoutingModule
  ]
})
export class RankModule { }
