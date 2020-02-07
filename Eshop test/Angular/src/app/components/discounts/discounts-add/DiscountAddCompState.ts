export class DiscountAddCompState {
  private static CREATE = 1;
  private static BADDISC = 2;
  private static SHOWFINDISC = 3;
  private state = 0;

  public setCreate() {
    this.state = DiscountAddCompState.CREATE;
  }

  public setBadDiscount() {
    this.state = DiscountAddCompState.BADDISC;
  }

  public setShowFinishedDiscount() {
    this.state = DiscountAddCompState.SHOWFINDISC;
  }

  public isCreate() {
    return this.state === DiscountAddCompState.CREATE || this.isBadDiscount();
  }

  public isBadDiscount() {
    return this.state === DiscountAddCompState.BADDISC;
  }

  public isShowFinishedDiscount() {
    return this.state === DiscountAddCompState.SHOWFINDISC;
  }
}
