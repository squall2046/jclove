export class Modal {
  icon?: string;
  title?: string;
  subTitle?: string;
  msgA?: string;
  msgB?: string;
  btnConfirm?: string;
  btnCancel?: string;
  math?: {
    show: boolean;
    section: MathSec[];
  }
}

export class MathSec {
  name: string;
  text: string;
}