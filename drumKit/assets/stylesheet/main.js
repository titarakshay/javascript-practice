let keys=document.querySelectorAll(".key");


function playSound(e){
    let audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio)return;
    audio.currentTime=0;
    audio.play();
    key.classList.add("playing");
    setTimeout(function(){
    },0.07)
    console.log(key)
}

function removeTransition(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing")
    console.log(this)
    
}




keys.forEach(key=>key.addEventListener("transitionend",removeTransition))
window.addEventListener("keydown",playSound);