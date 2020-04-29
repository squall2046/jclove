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
    qNumOne: 0,
    qNumTwo: 0,
    selShow: false,
    selSpace: 0,
    space: [
      {
        id: "a-hundred",
        fill: "",
      },
      {
        id: "a-ten",
        fill: "",
      },
      {
        id: "a-unit",
        fill: "",
      },
      {
        id: "b-hundred",
        fill: "",
      },
      {
        id: "b-ten",
        fill: "",
      },
      {
        id: "b-unit",
        fill: "",
      },
      {
        id: "c-hundred",
        fill: "",
      },
      {
        id: "c-ten",
        fill: "",
      },
      {
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
  //   this.math.qNumOne = Math.floor(Math.random() * 9) + 10;
  //   this.math.qNumTwo = Math.floor(Math.random() * 9) + 1;
  // }
}
