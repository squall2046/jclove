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
      // {
      //   name: "q-mark",
      //   symbol: "?"
      // },
    ],
    section: [
      {
        name: "theory",
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
      // {
      //   name: "quiz",
      //   text: "quiz"
      // },
    ],
    basicPlusSheet: [
      "1+1=2", "1+2=3", "1+3=4", "1+4=5", "1+5=6", "1+6=7", "1+7=8", "1+8=9", "1+9=10",
      "2+2=4", "2+3=5", "2+4=6", "2+5=7", "2+6=8", "2+7=9", "2+8=10",
      "3+3=6", "3+4=7", "3+5=8", "3+6=9", "3+7=10",
      "4+4=8", "4+5=9", "4+6=10",
      "5+5=10",
    ],
    plusSheet: [
      "9+2=11", "9+3=12", "9+4=13", "9+5=14", "9+6=15", "9+7=16", "9+8=17", "9+9=18",
      "8+3=11", "8+4=12", "8+5=13", "8+6=14", "8+7=15", "8+8=16",
      "7+4=11", "7+5=12", "7+6=13", "7+7=14",
      "6+5=11", "6+6=12",
    ],
    timesSheet: [],
    units: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    Twenty: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    icons: ["local_florist", "filter_vintage", "local_pizza", "eco", "bug_report", "edit", "ac_unit", "beach_access", "sports_soccer", "toys"],
    iconColors: ["#ffc0cb", "#fb966e", "#d05a6e", "#3c2f41", "#51a8dd", "#e1a679", "#42602d", "#592c63", "#77428d", "#f8c3cd", "#ebb471", "#b35c37", "#d19826", "#939650", "#a5dee4", "#2b5f75"],
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
    ansExcellent: false,
  }

  constructor() {

  }

  // random() {
  //   this.math.tenRandom = Math.floor(Math.random() * 9) + 10;
  //   this.math.unitRandom = Math.floor(Math.random() * 9) + 1;
  // }
}
