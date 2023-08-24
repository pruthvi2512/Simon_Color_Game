let gameSeq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let started= false;
let level= 0;
let h2=document.getElementById("ab");
 

document.addEventListener("keypress",function(){

 if(started==false){
    // console.log("game started");
    
    started=true;
    levelup();
   
 }

});
function userFlash(btn){   
  btn.classList.add("uflash");
  setTimeout(() => {btn.classList.remove("uflash")
    
  }, 250);
}


function btnFlash(btn){   
    btn.classList.add("flash");
    setTimeout(() => {btn.classList.remove("flash")
      
    }, 250);

  //  console.log(btn);
}
  function levelup() {
    // console.log(`${level}`);
    level++;
   h2.innerText=`Level ${level}`;
   let randIdx= Math.floor(Math.random()*3);
   let randColor=btns[randIdx];
   let randBtn=document.querySelector(`.${randColor}`);
  //  console.log(randBtn);
   gameSeq.push(randColor);
  //  console.log("game=",gameSeq);
   
    btnFlash(randBtn);
   
    
}
function checkans(ind){
  if(gameSeq[ind]===userseq[ind]){
    if(gameSeq.length===userseq.length){
        console.log("true");
        userseq=[];
        levelup();
    }

  }
  else{
    h2.innerText="game over please click any key to restart";
    reset();

  }
}

function btnPress(){
  console.log("botton pressed");
  userFlash(this);
  let btn=this;
  console.log(btn);
  usercolor=btn.getAttribute("id");
  userseq.push(usercolor);
  console.log("user=",userseq);
  checkans(userseq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
function reset(){
  gameSeq=[];
  userseq=[];
  level=0;
  started=false;
}

