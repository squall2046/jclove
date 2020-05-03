import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import { PageNoFoundComponent } from './components/page-no-found/page-no-found.component';
import { ModalComponent } from './components/modal/modal.component';

import { MatFormFieldModule } from '@angular/material/form-field';


// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [
    StopPropagationDirective,
    PageNoFoundComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,

    // NgbModule,
    // FontAwesomeModule,
    // NgxPaginationModule,
    // TooltipModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,

    // NgbModule,
    // FontAwesomeModule,
    // NgxPaginationModule,
    // TooltipModule,
    StopPropagationDirective,
    PageNoFoundComponent,
    ModalComponent
  ]
})
export class SharedModule {
  constructor() {
    // library.add(fab, far, fas);
  }
}
