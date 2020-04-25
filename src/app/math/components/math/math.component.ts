import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { DialogComponent } from '../../../shared/components/dialog/dialog.component';

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
  // animal: string;
  // name: string;

  constructor(
    // public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     width: '250px',
  //     data: { name: this.name, animal: this.animal }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed', result);
  //     this.animal = result;
  //   });
  // }

  modalOn() {

  }
}
