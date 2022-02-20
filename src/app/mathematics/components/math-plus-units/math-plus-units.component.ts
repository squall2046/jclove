import { Component, OnInit } from '@angular/core';
import { Mathematics } from '../../mathematics.model';
import { Modal } from 'src/app/shared/models/modal.model';
import { MathematicsService } from '../../mathematics.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ProfileService } from '../../../profile/profile.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-math-plus-units',
  templateUrl: './math-plus-units.component.html',
  styleUrls: ['./math-plus-units.component.scss']
})
export class MathPlusUnitsComponent implements OnInit {
  math: any;
  mathOperation: string;
  modal: Modal;
  profile: User;

  audio = "";
  previousGif = "0";
  currentGif = "1";
  extraGif = "../../../../assets/images/gif/balloon.png"
  // trueGif = "../../../../assets/images/gif/olaf2.gif";
  // falseGif = "../../../../assets/images/gif/olaf3.gif";
  trueGif = "../../../../assets/images/gif/toade1.gif";
  falseGif = "../../../../assets/images/gif/toad9.gif";

  constructor(
    private mathService: MathematicsService,
    private modalService: ModalService,
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.getUpdatedProfile();
    this.reload();
    // console.log(15 % 7, 8 % 7, 2 % 7);
  }


  getUpdatedProfile() {
    this.profileService.postProfile().subscribe(res => {
      this.profileService.profile = { ...res[0] };
      this.profile = this.profileService.profile;
    });
  };


  reload() {
    this.math = this.mathService.math;
    this.math.ansCorrect = false;
    this.mathService.math.space[8].fill = "";

    // NOTE: check plus or minus:
    this.mathOperation = window.sessionStorage.getItem("math-operation");
    let number1 = Math.floor(Math.random() * 9) + 1;
    let number2 = Math.floor(Math.random() * 9) + 1;
    if (this.mathOperation === 'plus') {
      this.mathService.math.unitRandom = number1;
      this.mathService.math.unitRandomTwo = number2;
    } else if (this.mathOperation === 'minus') {
      if (number1 > number2) {
        this.mathService.math.unitRandom = number1;
        this.mathService.math.unitRandomTwo = number2;
      } else if (number1 === number2) {
        this.mathService.math.unitRandom = number1;
        this.mathService.math.unitRandomTwo = number2 - 1;
      } else {
        this.mathService.math.unitRandom = number2;
        this.mathService.math.unitRandomTwo = number1;
      }
    }
  }


  checkStar() {
    // console.log(this.profile);

    if (this.profileService.profile.rewards.star > 0 && this.profileService.profile.rewards.star < 7) {
      this.profileService.profile.rewards.stars.push(this.profileService.profile.rewards.star);
    }
    if (this.profileService.profile.rewards.star === 7) {
      this.mathService.math.ansExcellent = true;
      setTimeout(() => {
        this.mathService.math.ansExcellent = false;
      }, 8000);
      this.profileService.profile.rewards.rainbow++;
      this.profileService.profile.rewards.rainbows.push(this.profileService.profile.rewards.rainbow);
      this.profileService.profile.rewards.star = 0;
      this.profileService.profile.rewards.stars = [];
    }

    // update rewards in database
    this.profileService.updateRewards().subscribe(res => {
      this.getUpdatedProfile();
    });
  }

  checkGifUnique() {
    this.currentGif = "../../../../assets/images/gif/ice-cream" + Math.floor(Math.random() * 8) + ".gif";
    if (this.currentGif === this.previousGif) {
      this.checkGifUnique();
    } else {
      this.previousGif = this.currentGif;
    }
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
    let expect: number;
    // NOTE: check plus or minus:
    if (this.mathOperation === 'plus') {
      expect = parseInt(this.math.unitRandom) + parseInt(this.math.unitRandomTwo);
    } else if (this.mathOperation === 'minus') {
      expect = parseInt(this.math.unitRandom) - parseInt(this.math.unitRandomTwo);
    }
    // console.log(expect, answer);

    if (expect === answer) {
      this.trueGif = "../../../../assets/images/gif/toade" + Math.floor(Math.random() * 3 + 1) + ".gif";
      // Math.floor(Math.random() * 3 + 1) 
      // 3是指，一共有几个数字要random，
      // 1是指，第一个数字的最小值是几

      // set and play audio:
      // this.audio = "../../../../assets/sound/laugh" + Math.floor(Math.random() * 6) + ".mp3";
      this.audio = "../../../../assets/sound/toadette" + Math.floor(Math.random() * 4 + 1) + ".wav";

      this.playAudio();
      // add and check rewards:
      this.profileService.profile.rewards.star++;
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
      // this.audio = "../../../../assets/sound/sad1.mp3";
      this.audio = "../../../../assets/sound/bowser1.wav";
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
