import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Modal } from 'src/app/shared/models/modal.model';
import { ModalService } from 'src/app/shared/services/modal.service';
import { User } from 'src/app/shared/models/user.model';
import { ProfileService } from 'src/app/profile/profile.service';

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
  profile: User;
  math: any;
  mathOperation: string;

  constructor(
    private router: Router,
    private modalService: ModalService,
    private profileService: ProfileService,
    private mathService: MathematicsService,
  ) { }

  ngOnInit(): void {
    this.modal = this.modalService.modal;
    this.profile = this.profileService.profile;
    this.math = this.mathService.math;
    this.mathOperation = window.sessionStorage.getItem("math-operation");
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
    this.router.navigate(['/math/' + section])
    this.app.main.headText = "/math/" + section;
  }
}
