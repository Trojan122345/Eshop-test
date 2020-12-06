export class OrderCompState {
  private static SHOWALL = 1;
  private static SHOWONE = 2;
  private state = 0;

  public setShowAll() {
    this.state = OrderCompState.SHOWALL;
  }

  public setShowOne() {
    this.state = OrderCompState.SHOWONE;
  }

  public isShowAll(): boolean {
    if (this.state === OrderCompState.SHOWALL) {
      return true;
    } else {
      return false;
    }
  }

  public isShowOne(): boolean {
    if (this.state === OrderCompState.SHOWONE) {
      return true;
    } else {
      return false;
    }
  }
}
