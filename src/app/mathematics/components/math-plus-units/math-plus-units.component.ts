import { Component, OnInit } from '@angular/core';
import { Mathematics } from '../../mathematics.model';
import { Modal } from 'src/app/shared/models/modal.model';
import { MathematicsService } from '../../mathematics.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ProfileService } from '../../../profile/profile.service';
@Component({
  selector: 'app-math-plus-units',
  templateUrl: './math-plus-units.component.html',
  styleUrls: ['./math-plus-units.component.scss']
})
export class MathPlusUnitsComponent implements OnInit {
  math: any;
  modal: Modal;
  profile: any;

  starArr = [];
  rainbowArr = [];

  constructor(
    private mathService: MathematicsService,
    private modalService: ModalService,
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.math = this.mathService.math;
    this.rainbowArr = this.profileService.rewards.rainbows;
    this.starArr = this.profileService.rewards.stars;
    this.reload();

    // console.log(15 % 7, 8 % 7, 2 % 7);
  }

  checkStar() {
    if (this.profileService.rewards.star > 0 && this.profileService.rewards.star < 7) {
      this.profileService.rewards.stars.push(this.profileService.rewards.star);
    }
    if (this.profileService.rewards.star === 7) {
      this.profileService.rewards.star = 0;
      this.profileService.rewards.stars = [];
      this.profileService.rewards.rainbow++;
      this.profileService.rewards.rainbows.push(this.profileService.rewards.rainbow);
    }


    this.starArr = this.profileService.rewards.stars;
    this.rainbowArr = this.profileService.rewards.rainbows;
  }

  reload() {
    this.mathService.math.unitRandom = Math.floor(Math.random() * 9) + 1;
    this.mathService.math.unitRandomTwo = Math.floor(Math.random() * 9) + 1;
    this.mathService.math.space[8].fill = "";
    this.math.ansCorrect = false;
  }

  selectNum(num) {
    this.mathService.math.space[8].fill = num;
    this.checkAnswer();
  }

  checkAnswer() {
    let answer: number = parseInt(this.mathService.math.space[8].fill);
    let expect: number = parseInt(this.math.unitRandom) + parseInt(this.math.unitRandomTwo);
    console.log(expect, answer);

    if (expect === answer) {
      this.math.ansCorrect = true;
    }

    setTimeout(() => {
      if (this.math.ansCorrect) {
        this.profileService.rewards.star++;
        setTimeout(() => {
          this.reload();
          this.checkStar();
        }, 3000);
      }

      if (!this.math.ansCorrect) {
        setTimeout(() => {
          this.math.ansCorrect = false;
          setTimeout(() => {
            this.mathService.math.space[8].fill = "";
          }, 2000);
        });
      }
    });
  }

  modalOn() {
    this.modalService.modal.showMathPlusModal = true;
    this.modalService.modal.showMathModal = false;
    this.modalService.modal.showMathTimesModal = false;
  }
}
