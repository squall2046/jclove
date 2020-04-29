import { Component, OnInit } from '@angular/core';

import { Mathematics } from '../../mathematics.model';
import { MathematicsService } from '../../mathematics.service';
import { Modal } from 'src/app/shared/models/modal.model';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-math',
  templateUrl: './mathematics.component.html',
  styleUrls: ['./mathematics.component.scss']
})
export class MathematicsComponent implements OnInit {
  modal: Modal;
  math: any;

  constructor(
    private mathematicsService: MathematicsService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.math = this.mathematicsService.math;
    this.modal = this.modalService.modal;
    // this.modalService.subsVar = this.modalService.modalConfirm.subscribe(() =>
    //   this.modalConfirm());
    // this.modalService.subsVar = this.modalService.modalCancel.subscribe(() =>
    //   this.modalCancel());
  }

  modalOn(operation) {
    this.modalService.modal.showMathModal = true;
    this.modalService.modal.showMathPlusModal = false;
    this.modalService.modal.showMathTimesModal = false;
  }
  modalConfirm() { }
  modalCancel() { }
}
