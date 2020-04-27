import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Modal } from 'src/app/shared/models/modal.model';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() app;
  modal: Modal;

  constructor(
    private router: Router,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.modal = this.modalService.modal;
  }

  modalSubmit() { }
  modalCancel() { }
  modalOff() { }

  goMathPath(section) {
    // document.getElementById('close-btn').click();
    const modalOffBtn: HTMLElement = document.getElementById('close-btn') as HTMLElement;
    modalOffBtn.click();

    this.app.path = "math";

    switch (section) {
      case "units":
        this.router.navigate(['/math-plus-units'])
        break;
      case "tens":
        this.router.navigate(['/math-plus-tens'])
        break;
      case "quiz":
        this.router.navigate(['/math-plus-quiz'])
        break;
    }

  }

}
