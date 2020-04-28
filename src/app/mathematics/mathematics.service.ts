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
    qNumOne: 0,
    qNumTwo: 0,
    selShow: false,
    selSpace: 0,
    space: [
      {
        id: 10,
        fill: "",
      },
      {
        id: 11,
        fill: "",
      },
      {
        id: 12,
        fill: "",
      },
      {
        id: 21,
        fill: "",
      },
      {
        id: 22,
        fill: "",
      },
      {
        id: 23,
        fill: "",
      },
      {
        id: 31,
        fill: "",
      },
      {
        id: 32,
        fill: "",
      },
      {
        id: 33,
        fill: "",
      },
    ],
    answered: false,
    ansCorrect: false,
  }

  constructor() {

  }

  // random() {
  //   this.math.qNumOne = Math.floor(Math.random() * 9) + 10;
  //   this.math.qNumTwo = Math.floor(Math.random() * 9) + 1;
  // }
}
