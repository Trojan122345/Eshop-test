import {operators} from 'rxjs/internal/Rx';
import {OperState} from '../../../model/OperState';

export class CartCompState {
  private static VIEWCART = 1;
  private static ADDRESS = 2;
  private static GOTOFINISH = 3;
  private static FINISHED = 4;
  private state = 0;

  public setViewCart() {
    this.state = CartCompState.VIEWCART;
  }

  public setAddress() {
    this.state = CartCompState.ADDRESS;
  }

  public setGoToFinish() {
    this.state = CartCompState.GOTOFINISH;
  }

  public setFinished() {
    this.state = CartCompState.FINISHED;
  }

  public isViewCart() {
    return this.state === CartCompState.VIEWCART;
  }

  public isAddress() {
    return this.state === CartCompState.ADDRESS;
  }

  public isGoToFinish() {
    return this.state === CartCompState.GOTOFINISH;
  }

  public isFinished() {
    return this.state === CartCompState.FINISHED;
  }
}
