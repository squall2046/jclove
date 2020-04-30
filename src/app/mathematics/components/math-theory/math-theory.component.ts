import { Component, OnInit } from '@angular/core';
import { Mathematics } from '../../mathematics.model';
import { Modal } from 'src/app/shared/models/modal.model';
import { MathematicsService } from '../../mathematics.service';
import { ModalService } from 'src/app/shared/services/modal.service';
// import { ProfileService } from '../../../profile/profile.service';
@Component({
  selector: 'app-math-theory',
  templateUrl: './math-theory.component.html',
  styleUrls: ['./math-theory.component.scss']
})
export class MathTheoryComponent implements OnInit {
  math: any;
  modal: Modal;
  // profile: any;

  // starArr = [];
  // rainbowArr = [];
  iconColorOne = "";
  iconColorTwo = "";
  iconRandom = "";
  iconRandomArr = [];
  iconRandomArrTwo = [];

  showAnswer = false;


  constructor(
    private mathService: MathematicsService,
    private modalService: ModalService,
    // private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.math = this.mathService.math;
    // this.rainbowArr = this.profileService.rewards.rainbows;
    // this.starArr = this.profileService.rewards.stars;
    this.reload();
    // console.log(15 % 7, 8 % 7, 2 % 7);
  }

  // checkStar() {
  //   if (this.profileService.rewards.star > 0 && this.profileService.rewards.star < 7) {
  //     this.profileService.rewards.stars.push(this.profileService.rewards.star);
  //   }
  //   if (this.profileService.rewards.star === 7) {
  //     this.profileService.rewards.star = 0;
  //     this.profileService.rewards.stars = [];
  //     this.profileService.rewards.rainbow++;
  //     this.profileService.rewards.rainbows.push(this.profileService.rewards.rainbow);
  //   }


  //   this.starArr = this.profileService.rewards.stars;
  //   this.rainbowArr = this.profileService.rewards.rainbows;
  // }
  modalOn() {
    this.modalService.modal.showMathPlusModal = true;
    this.modalService.modal.showMathModal = false;
    this.modalService.modal.showMathTimesModal = false;
  }

  reload() {
    this.mathService.math.unitRandom = Math.floor(Math.random() * 9) + 1;
    this.mathService.math.unitRandomTwo = Math.floor(Math.random() * 9) + 1;

    this.iconRandom = this.mathService.math.icons[Math.floor(Math.random() * this.mathService.math.icons.length)];
    this.iconColorOne = this.mathService.math.iconColors[Math.floor(Math.random() * this.mathService.math.iconColors.length)];
    this.iconColorTwo = this.mathService.math.iconColors[Math.floor(Math.random() * this.mathService.math.iconColors.length)];
    this.iconRandomArr = [];
    this.iconRandomArrTwo = [];

    let numberOne = 0;
    let numberTwo = 0;
    for (let i = 0; i < this.mathService.math.unitRandom; i++) {
      this.iconRandomArr.push(numberOne);
      numberOne++;
    }
    for (let j = 0; j < this.mathService.math.unitRandomTwo; j++) {
      this.iconRandomArrTwo.push(numberTwo);
      numberTwo++;
    }

    this.showAnswer = false;
  }

  showTime() {
    // this.checkAnswer();
    // setTimeout(() => {
    //   this.reload();
    // }, 9000);
    if (!this.showAnswer) {
      return this.showAnswer = true;
    }
    if (this.showAnswer) {
      this.reload();
      return this.showAnswer = false;
    }
  }

}
