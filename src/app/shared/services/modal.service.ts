import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalMessage = {
    showMathOption: false
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
