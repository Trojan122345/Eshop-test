export class OperState {
  private static WORKING = 1;
  private static SUCCESS = 2;
  private static ERROR = 3;
  private state = 0;
  private err: string;

  public setWorking() {
    this.state = OperState.WORKING;
  }

  public setSuccess() {
    this.state = OperState.SUCCESS;
  }

  public isWorking(): boolean {
    return this.state === OperState.WORKING;
  }

  public isSuccess(): boolean {
    return this.state === OperState.SUCCESS;
  }

  public isError(): boolean {
    return this.state === OperState.ERROR;
  }

  public setError(error: any) {
    this.err = JSON.stringify(error, null, 1);
    this.state = OperState.ERROR;
  }

  public getError(): string {
    return this.err;
  }

  public setBack() {
    this.state = 0;
  }
}
