import { Injectable } from '@angular/core';
import { Mathematics } from './mathematics.model';

@Injectable({
  providedIn: 'root'
})

export class MathematicsService {
  math = {
    operation: [
      {
        name: "plus",
        symbol: "+"
      },
      {
        name: "minus",
        symbol: "-"
      },
      {
        name: "times",
        symbol: "×"
      },
      {
        name: "divide",
        symbol: "÷"
      },
      {
        name: "q-mark",
        symbol: "?"
      },
    ],
    section: [
      {
        name: "book",
        text: ""
      },
      {
        name: "units",
        text: "0~9"
      },
      {
        name: "tens",
        text: "10~99"
      },
      {
        name: "quiz",
        text: "quiz"
      },
    ],
    units: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    Twenty: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    tenRandom: 0,
    tenRandomTwo: 0,
    unitRandom: 0,
    unitRandomTwo: 0,
    selShow: false,
    selSpace: 0,
    space: [
      {
        index: 0,
        id: "a-hundred",
        fill: "",
      },
      {
        index: 1,
        id: "a-ten",
        fill: "",
      },
      {
        index: 2,
        id: "a-unit",
        fill: "",
      },
      {
        index: 3,
        id: "b-hundred",
        fill: "",
      },
      {
        index: 4,
        id: "b-ten",
        fill: "",
      },
      {
        index: 5,
        id: "b-unit",
        fill: "",
      },
      {
        index: 6,
        id: "c-hundred",
        fill: "",
      },
      {
        index: 7,
        id: "c-ten",
        fill: "",
      },
      {
        index: 8,
        id: "c-unit",
        fill: "",
      },
    ],
    answered: false,
    ansCorrect: false,
  }

  constructor() {

  }

  // random() {
  //   this.math.tenRandom = Math.floor(Math.random() * 9) + 10;
  //   this.math.unitRandom = Math.floor(Math.random() * 9) + 1;
  // }
}
