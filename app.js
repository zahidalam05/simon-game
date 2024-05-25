let gameSeq=[];
let userSeq=[];


let btns=["yellow", "red", "purple", "green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");


 function startbtn()
 {
    if(started==false)
        {
            console.log("start game");
            started=true;
            levelUp();
        }
        
 }



// button flash function

function gameFlash(btn)
{
    btn.classList.add("gameFlash");
    setTimeout(function () {
        btn.classList.remove("gameFlash");
    },250);
}

//user flash function

function userFlash(btn)
{
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    },250);
}


function levelUp()
{
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random() * 3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`); 
    gameSeq.push(randColor);
    console.log("gameseq=",gameSeq);
    gameFlash(randBtn);
}


function chekbtn(idx)
{
    // console.log("curr lev:",level);
    
    if(userSeq[idx]===gameSeq[idx])
        {
            if(userSeq.length==gameSeq.length)
                {
                    setTimeout(levelUp,1000);
                }
        }
        else
        {
            h2.innerHTML=`Game Over! Your Score Was <b>${level}</b> <br> press start button game again start`;
           document.querySelector("body").style.backgroundColor="red";
           setTimeout(function ()
        {
            document.querySelector("body").style.backgroundColor="#323232";
        },500);
            reset();
        }
}


function UserbtnPress()
{
    // console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    chekbtn(userSeq.length-1);
}

let AllBtns=document.querySelectorAll(".btn");
for(btn of AllBtns)
    {
        btn.addEventListener("click", UserbtnPress);
    }

    function reset()
    {
        started=false;
        gameSeq=[];
        userSeq=[];
        level=0;
    }

