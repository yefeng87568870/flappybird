import { DataStore } from "./js/base/DataStore";
//游戏开始的入口 初始化整个入口的元素

import { ResourceLoader } from "./js/base/ResourceLoader";
import { Director } from "./js/Director";
import { Birds } from "./js/player/Birds";
import { Background } from "./js/runtime/Background";
import { Land } from "./js/runtime/Land";

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
    //获取导演(单例模式)
    this.director = Director.getInstance();
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
    //初始化游戏的方法
    this.Init();
  }
  //初始化游戏数据
  Init(){
    ////将游戏数据初始化并保存到变量池中
    //使用DataStore的put保存 因为这些数据在游戏结束后会被销毁
    this.store
            .put("background", new Background())
            .put("land",new Land())
            .put("pipes",[]) //pipes是多个水管 每次出现时都是一组一组出现的
            .put("birds",new Birds())

    this.director.createPipes();
    //调用导演的run方法来允许程序
    this.director.run(); 
    this.addEvent();
  }   
  
  //监听点击事件
  addEvent(){
    // this.canvas.addEventListener("touchstart",()=>{
      //需要使用卫星提供的API
    wx.onTouchStart((result) => {
      if(this.director.isGameOver){
        //游戏结束 点击重新开始

      }else{
        //游戏进行中 点击小鸟向上飞
        this.director.birdsUp();
      }
    })
  }
}















