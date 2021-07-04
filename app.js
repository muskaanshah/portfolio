var res = document.getElementById("response");
var btnSub = document.getElementById("btn-submit");
var score = 0;

btnSub.addEventListener("click", validate);

function validate(){
        if (document.getElementById('a1').checked == true) {
          score= score+1;
        }
        if (document.getElementById('b1').checked == true) {
            score= score+1;
        }
        if (document.getElementById('c3').checked == true) {
            score= score+1;
        }
        if (document.getElementById('d2').checked == true) {
            score= score+1;
        }
        if (document.getElementById('e3').checked == true) {
            score= score+1;
        }
        if (document.getElementById('f1').checked == true) {
            score= score+1;
        }
        if (document.getElementById('g2').checked == true) {
            score= score+1;
        }
        if (document.getElementById('h3').checked == true) {
            score= score+1;
        }
        if (document.getElementById('i2').checked == true) {
            score= score+1;
        }
        if (document.getElementById('j3').checked == true) {
            score= score+1;
        }
    if(score >=8){
        res.innerText = "Your score is " + score + ". Great job!";
        res.style.color = "green";
    }
    else if(score <8 && score >= 6){
        res.innerText = "Your score is " + score + ". You can do better. Try taking the quiz again";
        res.style.color = "#EFB701";
    }
    else if(score < 6){
        res.innerText = "Your score is " + score + ". Read the blog again and then take the quiz.";
        res.style.color = "red";
    }
    score = 0;
}



