

//start button
function start() {
    document.getElementById('showGame').style.display = "block";
    document.getElementById('startButton').style.display = "none";
}

 //timer
 var number = 5;
 var intervalId;

//countdown functions
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {

    var doneButton = document.getElementById("doneButton");

    doneButton.onclick = function() {
        clearInterval(intervalId);
        check();
};

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#show-number").html("<h2>" + number + "</h2>");

    //  Once number hits zero...
    if (number === 0) {
        clearInterval(intervalId);
    check();
}
    

      //  Alert the user that time is up.
    //alert("Time Up!");

    function check () {
        var question1 = document.quiz.question1.value;
        var question2 = document.quiz.question2.value;
        var unanswered = 0;
        var correct = 0;
        var incorrect = 0;
        //html output
        var htmlCorrect = "Correct!";
        var htmlQuestion1Answer = "<p>The correct Answer is Manchuria.</p>";
        var htmlQuestion2Answer = "<p>The correct Answer is Adolf Hitler.</p>";
       
    
            //compares questions and answers
            if (question1 == "manchuria"){
                correct++;
                console.log("correct 1 = " + correct);
                document.querySelector("#question1Answer").innerHTML = htmlCorrect;
            }
            else if (question1 == ("pearlHarbor" || "NewYorkCity" || "seol")) {
                incorrect++;
                console.log("incorrect 1 = " + incorrect);
                document.querySelector("#question1Answer").innerHTML = htmlQuestion1Answer;
            } else {
                unanswered++;
            }

            if (question2 == "adolfHitler"){
                correct++;
                console.log("correct 2 = " + correct);
                document.querySelector("#question2Answer").innerHTML = htmlCorrect;
            }
            else if (question2 == ("ottoBaum" || "rudolfLehmann" || "georgKeppler")) {
                incorrect++;
                console.log("incorrect 2 = "+incorrect);
                document.querySelector("#question2Answer").innerHTML = htmlQuestion2Answer;
            } else {
                unanswered++;
            }
        
    
            var htmlScore = "<p>Correct Answers = " + correct + "<br>" +
                        "Incorrect Answers = " + incorrect + "<br>" +
                        "Unanswered Questions = " + unanswered + "</p>";
            document.querySelector("#score").innerHTML = htmlScore;
    
        console.log("total correct= "+correct);
        console.log("total  incorrect= "+incorrect);

        

        
        
    



    }
  }