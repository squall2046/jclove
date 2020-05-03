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
  modal: Modal;
  profile: User;
  user: User[] = [];

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
    this.profile = this.profileService.profile;
    this.reload();
    // console.log(15 % 7, 8 % 7, 2 % 7);
  }

  checkStar() {
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

    // this.profileService.updateRewards().subscribe(res => {
    //   // this.profileService.profile = res;
    //   this.user = res;
    //   console.log(typeof this.user, this.user);
    //   console.log("user: ", this.user[0].userId);
    //   this.profileService.profile.rewards.rainbow = this.user[0].rewards.rainbow;
    //   this.profileService.profile.rewards.star = this.user[0].rewards.star;
    //   this.profileService.profile.rewards.rainbows = this.user[0].rewards.rainbows;
    //   this.profileService.profile.rewards.stars = this.user[0].rewards.stars;
    // });
  }

  checkGifUnique() {
    this.currentGif = "../../../../assets/images/gif/ice-cream" + Math.floor(Math.random() * 8) + ".gif";
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
      this.audio = "../../../../assets/sound/laugh" + Math.floor(Math.random() * 6) + ".mp3";
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
