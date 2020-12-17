import { IColorObj } from "interfaces/IColorObj";


export class ColorClass implements IColorObj {
  public color: string;
  public time: number | string;

  constructor(colorObj: IColorObj) {
    const { color = '', time = '' } = colorObj;

    this.color = color;
    this.time = time;
  }
}