import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProfileModule } from './profile/profile.module';
import { HomeModule } from './home/home.module';
import { MathematicsModule } from './mathematics/mathematics.module';
import { MandarinModule } from './mandarin/mandarin.module';
import { EnglishModule } from './english/english.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ProfileModule,
    HomeModule,
    MathematicsModule,
    MandarinModule,
    EnglishModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
