
/* export let playbgm = function(){
  let audio = wx.createInnerAudioContext();
  audio.src = "audio/bgm.mp3";
  //设置自动播放
  // audio.autoplay = true;
  audio.loop = true;//设置循环播放
  //设置手动播放
  audio.play();
} */

function playMusic(src="",loop=false){
  return function(){
    let audio = wx.createInnerAudioContext();
    audio.src = src;
    audio.loop = loop;
    audio.play();
  }
}

export let playbgm = playMusic("audio/bgm.mp3",true);

export let boom = playMusic("audio/boom.mp3");
 
export let go = playMusic("audio/bullet.mp3");
 












