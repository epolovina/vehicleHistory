export interface IHelloResponse {
  message: string;
}

export class HelloResponse implements IHelloResponse {
  public message: string = "";

  constructor(res: string) {
    this.message = res;
  }
}