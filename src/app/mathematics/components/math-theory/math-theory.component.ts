import { Component, OnInit } from '@angular/core';
import { Mathematics } from '../../mathematics.model';
import { Modal } from 'src/app/shared/models/modal.model';
import { MathematicsService } from '../../mathematics.service';
import { ModalService } from 'src/app/shared/services/modal.service';
// import { ProfileService } from '../../../profile/profile.service';
@Component({
  selector: 'app-math-theory',
  templateUrl: './math-theory.component.html',
  styleUrls: ['./math-theory.component.scss']
})
export class MathTheoryComponent implements OnInit {
  math: any;
  modal: Modal;

  iconColorOne = "";
  iconColorTwo = "";
  iconRandom = "";
  iconRandomArr = [];
  iconRandomArrTwo = [];

  showAnswer = false;

  uniqueColor = "";

  constructor(
    private mathService: MathematicsService,
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.math = this.mathService.math;
    this.reload();
  }

  modalOn() {
    const showModal = Object.keys(this.modalService.modal.showModal);
    showModal.forEach(prop => {
      this.modalService.modal.showModal[prop] = false;
      if (prop === "showMathBasicPlusModal") {
        this.modalService.modal.showModal[prop] = true;
      }
    });
  }

  checkUniqueColor() {
    if (this.iconColorTwo === this.iconColorOne) {
      this.iconColorTwo = this.mathService.math.iconColors[Math.floor(Math.random() * this.mathService.math.iconColors.length)];
      this.checkUniqueColor();
    }
  }

  controlSumInTen() {
    if (this.mathService.math.unitRandom + this.mathService.math.unitRandomTwo > 10) {
      this.mathService.math.unitRandom = Math.floor(Math.random() * 9) + 1;
      this.mathService.math.unitRandomTwo = Math.floor(Math.random() * 9) + 1;
      this.controlSumInTen();
    }
  }

  reload() {
    // question numbers:
    this.mathService.math.unitRandom = Math.floor(Math.random() * 9) + 1;
    this.mathService.math.unitRandomTwo = Math.floor(Math.random() * 9) + 1;
    this.controlSumInTen()

    // question icon and two colors:
    this.iconRandom = this.mathService.math.icons[Math.floor(Math.random() * this.mathService.math.icons.length)];
    this.iconColorOne = this.mathService.math.iconColors[Math.floor(Math.random() * this.mathService.math.iconColors.length)];
    this.iconColorTwo = this.mathService.math.iconColors[Math.floor(Math.random() * this.mathService.math.iconColors.length)];
    this.checkUniqueColor();

    // loop question icons:
    this.iconRandomArr = [];
    this.iconRandomArrTwo = [];
    let numberOne = 0;
    let numberTwo = 0;
    for (let i = 0; i < this.mathService.math.unitRandom; i++) {
      this.iconRandomArr.push(numberOne);
      numberOne++;
    }
    for (let j = 0; j < this.mathService.math.unitRandomTwo; j++) {
      this.iconRandomArrTwo.push(numberTwo);
      numberTwo++;
    }

    this.showAnswer = false;
  }

  showTime() {
    if (!this.showAnswer) {
      return this.showAnswer = true;
    }
    if (this.showAnswer) {
      this.reload();
      return this.showAnswer = false;
    }
  }

}
