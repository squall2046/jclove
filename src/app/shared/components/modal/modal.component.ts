import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Modal } from 'src/app/shared/models/modal.model';
import { ModalService } from 'src/app/shared/services/modal.service';

import { Mathematics } from 'src/app/mathematics/mathematics.model';
import { MathematicsService } from 'src/app/mathematics/mathematics.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() app;
  modal: Modal;
  math: any;

  constructor(
    private router: Router,
    private modalService: ModalService,
    private mathService: MathematicsService,
  ) { }

  ngOnInit(): void {
    this.modal = this.modalService.modal;
    this.math = this.mathService.math;
  }

  modalSubmit() { }
  modalCancel() { }
  modalOff() { }

  goMathPath(section) {
    // document.getElementById('close-btn').click();
    const modalOffBtn: HTMLElement = document.getElementById('close-btn') as HTMLElement;
    modalOffBtn.click();
    this.app.sidebar.show = false;

    this.app.path = "/math";

    switch (section) {
      case "theory":
        this.router.navigate(['/math/theory'])
        this.app.main.headText = "math/theory";
        break;
      case "units":
        this.router.navigate(['/math/units'])
        this.app.main.headText = "math/units";
        break;
      case "tens":
        this.router.navigate(['/math/tens'])
        this.app.main.headText = "math/tens";
        break;
      case "quiz":
        this.router.navigate(['/math/quiz'])
        this.app.main.headText = "math/quiz";
        break;
    }
  }
}
