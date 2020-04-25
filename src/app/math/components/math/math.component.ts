import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {

  math = [
    {
      operation: "+"
    },
    {
      operation: "-"
    },
    {
      operation: "x"
    },
    {
      operation: "÷"
    },
    {
      operation: "?"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
