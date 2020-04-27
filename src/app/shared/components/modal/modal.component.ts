import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { modalMessage } from 'src/app/shared/models/modal-message';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  modalMessage: modalMessage;

  path = "math-plus-units";

  constructor(
    private router: Router,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.modalMessage = this.modalService.modalMessage;
  }

  modalSubmit() {
  }

  modalCancel() {

  }

  modalOff() {

  }

  goPlusUnits() {
    this.router.navigate(['/math-plus-units'])
    // document.getElementById('close-btn').click();
    let modalOffBtn: HTMLElement = document.getElementById('close-btn') as HTMLElement;
    modalOffBtn.click();
  }
  goPlusTens() { }
  goPlusQuiz() { }

}
