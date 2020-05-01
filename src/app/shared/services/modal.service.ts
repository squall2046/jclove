import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Modal } from 'src/app/shared/models/modal.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modal: Modal = {
    icon: "face",
    title: "Hello~",
    subTitle: "",
    msgA: "Do you want to learn with me?",
    msgB: "",
    btnConfirm: "Yes",
    btnCancel: "No",
    showModal:{
      showMathModal: false,
      showMathBasicPlusModal: false,
      showMathPlusModal: false,
      showMathTimesModal: false,
    }
  }

  subsVar: Subscription;
  modalConfirm = new EventEmitter();
  modalCancel = new EventEmitter();
  modalInitial = new EventEmitter();

  constructor() { }

  modalConfirmEvent() {
    this.modalConfirm.emit();
  }

  modalCancelEvent() {
    this.modalCancel.emit();
  }

  modalInitialEvent() {
    this.modalInitial.emit();
  }
}
