import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-plus-tens',
  templateUrl: './math-plus-tens.component.html',
  styleUrls: ['./math-plus-tens.component.scss']
})
export class MathPlusTensComponent implements OnInit {

  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  qNumOne = Math.floor(Math.random() * 9) + 10;
  qNumTwo = Math.floor(Math.random() * 9) + 1;
  selectOn = false;
  selectSp: number;
  space = {
    a1: {
      id: 11,
      fill: "",
    },
    a2: {
      id: 12,
      fill: "",
    },
    b1: {
      id: 21,
      fill: "",
    },
    b2: {
      id: 22,
      fill: "",
    },
    b3: {
      id: 23,
      fill: "",
    },
    c1: {
      id: 31,
      fill: "",
    },
    c2: {
      id: 32,
      fill: "",
    },
    c3: {
      id: 33,
      fill: "",
    },
  }

  correctAns = false;

  constructor() { }

  ngOnInit(): void {
  }

  reload() {
    this.qNumOne = Math.floor(Math.random() * 9) + 10;
    this.qNumTwo = Math.floor(Math.random() * 9) + 1;

    const space = Object.entries(this.space)
    space.forEach(([sp]) => {
      this.space[sp].fill = "";
    });
  }

  closeSelect() {
    this.selectOn = false;
  }

  selectSpace(space) {
    this.selectOn = true;
    this.selectSp = space;
  }

  selectUnit(num) {
    const space = Object.entries(this.space)
    space.forEach(([sp]) => {
      if (this.space[sp].id === this.selectSp) {
        this.space[sp].fill = num;
      }
    });
    this.closeSelect();
    this.checkAnswer();
  }

  deleteUnit() {
    const space = Object.entries(this.space)
    space.forEach(([sp]) => {
      if (this.space[sp].id === this.selectSp) {
        this.space[sp].fill = "";
      }
    });
  }

  checkAnswer() {
    let expect: number = this.qNumOne + this.qNumTwo;
    let answer: number = parseInt([this.space.c1.fill, this.space.c2.fill, this.space.c3.fill].join(""))
    console.log(expect, answer);
    if (expect === answer) {
      this.correctAns = true;
    }
    setTimeout(() => {
      if (this.correctAns) {
        setTimeout(() => {
          this.correctAns = false;
          this.reload();
        }, 3000);
      }
    });
  }

}
