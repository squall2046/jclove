export class Modal {
  icon?: string;
  title?: string;
  subTitle?: string;
  msgA?: string;
  msgB?: string;
  btnConfirm?: string;
  btnCancel?: string;
  showModal?: ShowModal;
}

export class ShowModal {
  showMathModal?: boolean;
  showMathBasicPlusModal?: boolean;
  showMathPlusModal?: boolean;
  showMathTimesModal?: boolean;
}