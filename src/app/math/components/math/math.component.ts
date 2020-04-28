import { Component, OnInit } from '@angular/core';

import { Math } from '../../math.model';
import { MathService } from '../../math.service';
import { Modal } from 'src/app/shared/models/modal.model';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {
  modal: Modal;
  math: any;

  constructor(
    private mathService: MathService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.math = this.mathService.math;
    this.modal = this.modalService.modal;
    // this.modalService.subsVar = this.modalService.modalConfirm.subscribe(() =>
    //   this.modalConfirm());
    // this.modalService.subsVar = this.modalService.modalCancel.subscribe(() =>
    //   this.modalCancel());
  }

  modalOn(operation) {
    this.modalService.modal.showMathModal = true;
  }
  modalConfirm() { }
  modalCancel() { }
}
