import { Component, OnInit } from '@angular/core';
import { Mathematics } from '../../mathematics.model';
import { Modal } from 'src/app/shared/models/modal.model';
import { MathematicsService } from '../../mathematics.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ProfileService } from '../../../profile/profile.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-math-plus-tens',
  templateUrl: './math-plus-tens.component.html',
  styleUrls: ['./math-plus-tens.component.scss']
})
export class MathPlusTensComponent implements OnInit {
  math: any;
  mathOperation: string;
  modal: Modal;
  profile: User;
  user: User[] = [];

  audio = "";
  previousGif = "0";
  currentGif = "1";
  extraGif = "../../../../assets/images/gif/balloon.png"
  // trueGif = "../../../../assets/images/gif/olaf1.gif";
  trueGif = "../../../../assets/images/gif/toad1.gif";
  falseGif = "../../../../assets/images/gif/toad9.gif";

  constructor(
    private mathService: MathematicsService,
    private modalService: ModalService,
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.getUpdatedProfile();
    this.reload();
  }

  getUpdatedProfile() {
    this.profileService.postProfile().subscribe(res => {
      this.profileService.profile = { ...res[0] };
      this.profile = this.profileService.profile;
    });
  };

  reload() {
    this.math = this.mathService.math;
    this.mathService.math.tenRandom = Math.floor(Math.random() * 9) + 10;
    this.mathService.math.unitRandom = Math.floor(Math.random() * 9) + 1;

    this.mathService.math.space.forEach(space => {
      space.fill = "";
    });
    // // if this.space is object:
    // const space = Object.entries(this.space)
    // space.forEach(([sp]) => {
    //   this.space[sp].fill = "";
    // });
    this.math.answered = false;
    this.math.ansCorrect = false;
    this.mathOperation = window.sessionStorage.getItem("math-operation");
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
    //   console.log("user: ", this.user[0].username);
    //   this.profileService.profile.rewards.rainbow = this.user[0].rewards.rainbow;
    //   this.profileService.profile.rewards.star = this.user[0].rewards.star;
    //   this.profileService.profile.rewards.rainbows = this.user[0].rewards.rainbows;
    //   this.profileService.profile.rewards.stars = this.user[0].rewards.stars;
    // });

    // update rewards in database
    console.log(this.profileService.profile);

    this.profileService.updateRewards().subscribe(res => {
      this.user = res;
      console.log("subscribe:", this.user[0].rewards);
      console.log(this.profileService.profile);

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
    let expect: number;

    // NOTE: check plus or minus:
    if (this.mathOperation === 'plus') {
      expect = parseInt(this.math.tenRandom) + parseInt(this.math.unitRandom);
    } else if (this.mathOperation === 'minus') {
      expect = parseInt(this.math.tenRandom) - parseInt(this.math.unitRandom);
    }
    // console.log(expect, answer);
    if (ten && unit) {
      this.math.answered = true;
    }
    if (expect === answer) {
      this.trueGif = "../../../../assets/images/gif/toad" + Math.floor(Math.random() * 2 + 1) + ".gif";

      // set and play audio:
      // this.audio = "../../../../assets/sound/laugh" + Math.floor(Math.random() * 6) + ".mp3";
      this.audio = "../../../../assets/sound/toad" + Math.floor(Math.random() * 4 + 1) + ".wav";
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
    }
    if (expect !== answer && this.math.answered) {
      // set and play audio:
      // this.audio = "../../../../assets/sound/sad1.mp3";
      this.audio = "../../../../assets/sound/bowser1.wav";
      this.playAudio();
      // no reload question but reload status:
      setTimeout(() => {
        this.math.answered = false;
        this.math.ansCorrect = false;
        this.mathService.math.space[6].fill = "";
        this.mathService.math.space[7].fill = "";
        this.mathService.math.space[8].fill = "";
      }, 2000);
    }

    // if (expect === answer) {
    //   this.math.ansCorrect = true;
    //   this.playLaughAudio();
    // }

    // setTimeout(() => {
    //   if (this.math.ansCorrect) {
    //     this.profileService.profile.rewards.star++;
    //     this.checkStar();
    //     setTimeout(() => {
    //       this.reload();
    //     }, 3000);
    //   }

    //   if (!this.math.ansCorrect && this.math.answered) {
    //     this.playSadAudio();

    //     setTimeout(() => {
    //       this.math.answered = false;
    //       this.math.ansCorrect = false;
    //     }, 2000);
    //   }
    // });
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
