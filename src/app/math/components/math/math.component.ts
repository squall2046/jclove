import { Component, OnInit } from '@angular/core';
import { Modal } from 'src/app/shared/models/modal.model';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {
  modal: Modal;

  math = [
    {
      operation: "+"
    },
    {
      operation: "-"
    },
    {
      operation: "×"
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
    this.modal = this.modalService.modal;
    this.modalService.subsVar = this.modalService.modalConfirm.subscribe(() =>
      this.modalConfirm());
    this.modalService.subsVar = this.modalService.modalCancel.subscribe(() =>
      this.modalCancel());
  }

  modalOn(operation) {
    // switch (operation) {
    //   case "+":
    //     this.modal.icon = "add"
    //     break;
    //   case "-":
    //     this.modal.icon = "remove"
    //     break;
    //   case "x":
    //     this.modal.icon = "clear"
    //     break;
    // }
    this.modalService.modal.math.show = true;
  }
  modalConfirm() { }
  modalCancel() { }
}
