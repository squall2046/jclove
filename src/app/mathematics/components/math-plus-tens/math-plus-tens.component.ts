import { Component, OnInit } from '@angular/core';
import { Mathematics } from '../../mathematics.model';
import { Modal } from 'src/app/shared/models/modal.model';
import { MathematicsService } from '../../mathematics.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ProfileService } from '../../../profile/profile.service';

@Component({
  selector: 'app-math-plus-tens',
  templateUrl: './math-plus-tens.component.html',
  styleUrls: ['./math-plus-tens.component.scss']
})
export class MathPlusTensComponent implements OnInit {
  math: any;
  modal: Modal;

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
    this.starArr = this.profileService.rewards.stars
    // console.log(15 % 7, 8 % 7, 2 % 7);
    this.reload();
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
    this.mathService.math.tenRandom = Math.floor(Math.random() * 9) + 10;
    this.mathService.math.unitRandom = Math.floor(Math.random() * 9) + 1;

    this.mathService.math.space.forEach(space => {
      space.fill = "";
    });
    // const space = Object.entries(this.space)
    // space.forEach(([sp]) => {
    //   this.space[sp].fill = "";
    // });
    this.math.answered = false;
    this.math.ansCorrect = false;
  }

  playLaughAudio() {
    let audio = new Audio();
    let random = Math.floor(Math.random() * 7) + 1;
    audio.src = "../../../../assets/sound/laugh" + random + ".mp3";
    audio.load();
    audio.play();
  }
  playSadAudio() {
    let audio = new Audio();
    audio.src = "../../../../assets/sound/sad1.mp3";
    audio.load();
    audio.play();
  }

  closeSelect() {
    this.math.selShow = false;
  }

  selectSpace(space) {
    this.math.selShow = true;
    this.math.selSpace = space;
  }

  selectUnit(num) {
    this.math.space.forEach(space => {
      if (space.id === this.math.selSpace) {
        space.fill = num;
      }
    });
    this.closeSelect();
    this.checkAnswer();
  }

  deleteUnit() {
    this.math.space.forEach(space => {
      if (space.id === this.math.selSpace) {
        space.fill = "";
      }
    });
    this.closeSelect();
    this.checkAnswer();
  }

  checkAnswer() {
    let hundred, ten, unit;
    this.math.space.forEach(space => {
      switch (space.id) {
        case 'c-hundred':
          hundred = space.fill;
          break;
        case 'c-ten':
          ten = space.fill;
          break;
        case 'c-unit':
          unit = space.fill;
          break;
      }
    });

    let answer: number = parseInt([hundred, ten, unit].join(""));
    let expect: number = parseInt(this.math.tenRandom) + parseInt(this.math.unitRandom);
    // console.log(expect, answer);
    if (ten && unit) {
      this.math.answered = true;
    }
    if (expect === answer) {
      this.math.ansCorrect = true;
      this.playLaughAudio();
    }

    setTimeout(() => {
      if (this.math.ansCorrect) {
        this.profileService.rewards.star++;
        setTimeout(() => {
          this.reload();
          this.checkStar();
        }, 3000);
      }

      if (!this.math.ansCorrect && this.math.answered) {
        this.playSadAudio();

        setTimeout(() => {
          this.math.answered = false;
          this.math.ansCorrect = false;
        }, 2000);
      }
    });
  }

  modalOn() {
    this.modalService.modal.showMathPlusModal = true;
    this.modalService.modal.showMathModal = false;
    this.modalService.modal.showMathTimesModal = false
  }
}
