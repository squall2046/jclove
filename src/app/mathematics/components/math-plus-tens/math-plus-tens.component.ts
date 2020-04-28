import { Component, OnInit } from '@angular/core';
import { Mathematics } from '../../mathematics.model';
import { MathematicsService } from '../../mathematics.service';
@Component({
  selector: 'app-math-plus-tens',
  templateUrl: './math-plus-tens.component.html',
  styleUrls: ['./math-plus-tens.component.scss']
})
export class MathPlusTensComponent implements OnInit {
  math: any;

  constructor(
    private mathService: MathematicsService,
  ) { }

  ngOnInit(): void {
    this.math = this.mathService.math;
    this.reload();
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
        case 31:
          hundred = space.fill;
          break;
        case 32:
          ten = space.fill;
          break;
        case 33:
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
        setTimeout(() => {
          this.math.answered = false;
          this.math.ansCorrect = false;
          this.reload();
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
