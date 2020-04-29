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
  starNum = 0;
  stars = [];

  constructor(
    private mathService: MathematicsService,
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.math = this.mathService.math;
    this.reload();
    this.checkStar();
  }

  checkStar() {
    this.stars = [];
    for (let index = 0; index < this.profileService.rewards.stars.number; index++) {
      this.stars.push(index);
    }
    return console.log(this.stars);
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
        this.profileService.rewards.stars.number++;

        setTimeout(() => {
          this.reload();
          this.checkStar();
        }, 3000);
      }

      if (!this.math.ansCorrect && this.math.answered) {
        setTimeout(() => {
          this.math.answered = false;
          this.math.ansCorrect = false;
        }, 3000);
      }
    });
  }
}
