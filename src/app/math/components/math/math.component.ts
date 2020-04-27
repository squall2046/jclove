import { Component, OnInit } from '@angular/core';
import { modalMessage } from 'src/app/shared/models/modal-message';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {
  modalMessage: modalMessage;

  math = [
    {
      operation: "+"
    },
    {
      operation: "-"
    },
    {
      operation: "x"
    },
    {
      operation: "÷"
    },
    {
      operation: "?"
    },
  ]

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.modalMessage = this.modalService.modalMessage;
    this.modalService.subsVar = this.modalService.modalConfirm.subscribe(() =>
      this.modalConfirm());
    this.modalService.subsVar = this.modalService.modalCancel.subscribe(() =>
      this.modalCancel());
  }

  modalOn() {
    this.modalService.modalMessage.showMathOption = true;
  }
  modalConfirm() { }
  modalCancel() { }
}
