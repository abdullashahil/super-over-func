const btn = document.querySelector("#strike")
const scb_1 = document.querySelector("#score-team1")
const wick_1 = document.querySelector("#wickets-team1")
const scb_2 = document.querySelector("#score-team2")
const wick_2 = document.querySelector("#wickets-team2")

var ballcount = 0;
var team = 1;
var score_1 = 0;
var score_2 = 0;
var w_1 = 0;
var w_2 = 0;
var tempsc = 0;

const possibleValues = [0,1,2,3,4,5,6,"W"]

const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");

function updatescore(){
    scb_1.innerText = score_1;
    wick_1.innerText = w_1;
    scb_2.innerText = score_2;
    wick_2.innerText = w_2;
}

function gameover(score_1,score_2){
gameOverAudio.play();

    if(score_1>score_2){
        alert("ind won with score")
    }
    else if(score_2>score_1){
        alert("pak won with score")
    }
    else if(score_1 === score_2){
        alert("Tie")
    }
}

function generaterandom(){
    return possibleValues[Math.floor(Math.random()*8)]
}

btn.addEventListener("click", ()=>{   
strikeAudio.pause();
strikeAudio.currentTime=0;
strikeAudio.play();
    if(team == 1){
        ballcount+=1;
        tempsc = generaterandom();
        // console.log(document.querySelector(`#team1-superover .ball:nth-child(${ballcount})`))
        document.querySelector(`#team1-superover .ball:nth-child(${ballcount})`).innerText = tempsc;
        if(tempsc != "W"){
            score_1 += tempsc;
        }
        else if(tempsc == "W"){
              w_1 += 1;
        }
        else if(ballcount==6 || w_1 == "W"){
            ballcount=0;
            team = 2;
        }
    updatescore();    
    }
    if(ballcount==6){
        ballcount=0;
        team = 2;
    }
    
    else if(team==2){
        ballcount+=1;
        tempsc = generaterandom();
        document.querySelector(`#team2-superover .ball:nth-child(${ballcount})`).innerText = tempsc;
    if(tempsc != "W"){
        score_2 += tempsc;
    }
    else{
        w_2 += 1;
    }
    if(score_2>score_1 || ballcount === 6 || w_2 === 2 ){
        gameover(score_1, score_2)
    }
    updatescore();

    }


})

resizeTo.addEventListener("click", ()=>{
    window.location.reload
})



