import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  showMathOption = true;
  modalMessage: any;

  path = "math-plus-units";

  constructor() { }

  ngOnInit(): void {
  }

  modalSubmit() {
    console.log(111);

  }

  modalCancel() {

  }
  goPlusUnits() { }
  goPlusTens() { }
  goPlusQuiz() { }

}
