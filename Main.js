import { DataStore } from "./js/base/DataStore";
//游戏开始的入口 初始化整个入口的元素

import { ResourceLoader } from "./js/base/ResourceLoader";
import { Background } from "./js/runtime/Background";

export class Main{//定义Main类
  constructor(){//构造函数 (初始化数据 new的时候调用)
    console.log("游戏开始");
    //初始化游戏过程中用到的数据
    this.canvas = wx.createCanvas(); //获取canvas
    this.ctx = this.canvas.getContext("2d"); //获取ctx
    this.loader = new ResourceLoader(); //创建资源加载器实例对象
    // console.log(this.loader)
    //获取变量池(单例模式)
    this.store = DataStore.getInstance();
    //调用onloaded方法 确保图片已经加载完成
    this.loader.onloaded().then(map=>this.onResourceLoaded(map));
  }
  //
  onResourceLoaded(map){
    //将游戏数据保存到变量池中
    //使用属性的方式保存数据 而不是调用DataStore的put方法保存数据
    //put方法保存的数据会在游戏结束时销毁
    //而这些数据在游戏结束时不会销毁
    this.store.res = map;
    this.store.canvas = this.canvas;
    this.store.ctx = this.ctx;
    new Background().draw();
  }
}















