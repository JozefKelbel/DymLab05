
var numDisp = document.getElementById("numDisplay")
var myInp = document.getElementById("num")
var answer = Math.round(Math.random()*100)
var score = 100;

document.getElementById("guess").addEventListener("click",function(){
    
    console.log(myInp.value);
    var realNum = parseInt(myInp.value);
    
    if(realNum == answer){
        numDisp.innerText = "correct Score: "+score;
    } else {
        //numDisp.innerText = "incorrect";
        if (realNum > answer) {
            numDisp.innerText = "Too big";
    } else if(realNum < answer){
        numDisp.innerText = "Too small";
    }
        score = score -1;
    }
});