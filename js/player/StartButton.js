import { DataStore } from "../base/DataStore";
//重新开始按钮

import { Sprite } from "../base/Sprite";

export class StartButton extends Sprite{
  constructor(){
    //获取重新开始按钮
    let img = Sprite.getImage("startButton");
    let land = Sprite.getImage("land");
    let canvas = DataStore.getInstance().canvas;
    let w =canvas.width;
    let h =canvas.height;
    let x = (w - img.width)/2;//按钮的x坐标
    let y = (h - img.height - land.height)/2;//按钮的y坐标
    //调用重写父类构造方法
    super(img,0,0,img.width,img.height,x,y,img.width,img.height)
  }
}














