import { Component, OnInit } from '@angular/core';
import { Mathematics } from '../../mathematics.model';
import { MathematicsService } from '../../mathematics.service';
import { ProfileService } from '../../../profile/profile.service';
@Component({
  selector: 'app-math-plus-tens',
  templateUrl: './math-plus-tens.component.html',
  styleUrls: ['./math-plus-tens.component.scss']
})
export class MathPlusTensComponent implements OnInit {
  math: any;
  profile: any;

  starArr = [];
  rainbowArr = [];

  constructor(
    private mathService: MathematicsService,
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.math = this.mathService.math;
    this.profile = this.profileService.profile;
    this.reload();
    // this.checkStar();

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
    this.mathService.math.qNumOne = Math.floor(Math.random() * 9) + 10;
    this.mathService.math.qNumTwo = Math.floor(Math.random() * 9) + 1;

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
    let expect: number = parseInt(this.math.qNumOne) + parseInt(this.math.qNumTwo);
    // console.log(expect, answer);
    if (ten && unit) {
      this.math.answered = true;
    }
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

      if (!this.math.ansCorrect && this.math.answered) {
        setTimeout(() => {
          this.math.answered = false;
          this.math.ansCorrect = false;
        });
      }
    });
  }
}
