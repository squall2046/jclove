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

  audio = "";
  previousGif = "0";
  currentGif = "1";
  extraGif = "../../../../assets/images/gif/balloon.png"
  trueGif = "../../../../assets/images/gif/olaf2.gif";
  falseGif = "../../../../assets/images/gif/olaf3.gif";

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
      this.mathService.math.ansExcellent = true;
      setTimeout(() => {
        this.mathService.math.ansExcellent = false;
      }, 8000);
      this.profileService.rewards.rainbow++;
      this.profileService.rewards.rainbows.push(this.profileService.rewards.rainbow);
      this.profileService.rewards.star = 0;
      this.profileService.rewards.stars = [];
    }

    this.starArr = this.profileService.rewards.stars;
    this.rainbowArr = this.profileService.rewards.rainbows;
  }

  checkGifUnique() {
    this.currentGif = "../../../../assets/images/gif/ice-cream" + Math.floor(Math.random() * 9) + ".gif";
    if (this.currentGif === this.previousGif) {
      this.checkGifUnique();
    } else {
      this.previousGif = this.currentGif;
    }
  }

  reload() {
    this.mathService.math.unitRandom = Math.floor(Math.random() * 9) + 1;
    this.mathService.math.unitRandomTwo = Math.floor(Math.random() * 9) + 1;
    this.mathService.math.space[8].fill = "";
    this.math.ansCorrect = false;
  }

  playAudio() {
    let audio = new Audio();
    audio.src = this.audio;
    audio.load();
    audio.play();
  }

  selectNum(num) {
    this.mathService.math.space[8].fill = num;
    this.checkAnswer();
  }

  checkAnswer() {
    let answer: number = parseInt(this.mathService.math.space[8].fill);
    let expect: number = parseInt(this.math.unitRandom) + parseInt(this.math.unitRandomTwo);
    // console.log(expect, answer);

    if (expect === answer) {
      // set and play audio:
      this.audio = "../../../../assets/sound/laugh" + Math.floor(Math.random() * 7) + ".mp3";
      this.playAudio();
      // add and check rewards:
      this.profileService.rewards.star++;
      this.checkStar();
      // set currentGif
      this.checkGifUnique();
      // show currentGif and trueGif:
      this.math.ansCorrect = true;
      // reload question and status:
      setTimeout(() => {
        this.reload();
      }, 3000);
    } else {
      // set and play audio:
      this.audio = "../../../../assets/sound/sad1.mp3";
      this.playAudio();
      // no reload question but reload status:
      setTimeout(() => {
        this.mathService.math.space[8].fill = "";
      }, 2000);
    }


  }

  modalOn() {
    const showModal = Object.keys(this.modalService.modal.showModal);
    showModal.forEach(prop => {
      this.modalService.modal.showModal[prop] = false;
      if (prop === "showMathPlusModal") {
        this.modalService.modal.showModal[prop] = true;
      }
    });
  }
}
