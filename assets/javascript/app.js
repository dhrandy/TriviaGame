//start button
function start() {
    document.getElementById('showGame').style.display = "block";
    document.getElementById('startButton').style.display = "none";
    $("#show-number").html("<center><h2>Time Remaining:" + " " + number + "</h2></center>");
    run();
}

 //timer
 var number = 30;
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

/* $("#restartButton").click(function () {
    $("#quiz")[0].reset();
    return false;
    document.getElementById("score").reset();
  }); */

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#show-number").html("<center><h2>Time Remaining:" + " " + number + "</h2></center>");

    //  Once number hits zero...
    if (number === 0) {
        clearInterval(intervalId);
    check();
}
      //  Alert the user that time is up.
    //alert("Time Up!");

    function check () {
        var unanswered = 0;
        var correct = 0;
        var incorrect = 0;
    
        var question1 = document.quiz.question1.value;
        var question2 = document.quiz.question2.value;
        var question3 = document.quiz.question3.value;
        var question4 = document.quiz.question4.value;
        var question5 = document.quiz.question5.value;
        var question6 = document.quiz.question6.value;
        var question7 = document.quiz.question7.value;
        var question8 = document.quiz.question8.value;
        var question9 = document.quiz.question9.value;
        var question10 = document.quiz.question10.value;
        
        //html output
        var htmlCorrect = "Correct!";
        var htmlQuestion1Answer = "<br><p>The correct Answer is Manchuria.</p><br>";
        var htmlQuestion2Answer = "<br><p>The correct Answer is Adolf Hitler.</p><br>";
        var htmlQuestion3Answer = "<br><p>The correct Answer is Joseph Stalin.</p><br>";
        var htmlQuestion4Answer = "<br><p>The correct Answer is Benito Mussolini.</p><br>";
        var htmlQuestion5Answer = "<br><p>The correct Answer is gas.</p><br>";
        var htmlQuestion6Answer = "<br><p>The correct Answer is War Bonds</p><br>";
        var htmlQuestion7Answer = "<br><p>The correct Answer is Germany retreated for the 1st time.</p><br>";
        var htmlQuestion8Answer = "<br><p>The correct Answer is Hideki Tojo</p><br>";
        var htmlQuestion9Answer = "<br><p>The correct Answer is Albert Einstein</p><br>";
        var htmlQuestion10Answer = "<br><p>The correct Answer is Franklin Roosevelt</p><br>";

            //compares questions and answers
            if (question1 == "manchuria"){
                correct++;
            } else if (question1 !== "") {
                incorrect++;
                document.querySelector("#question1Answer").innerHTML = htmlQuestion1Answer;
            } else if (question1 !== "manchuria"){
                unanswered++;
                document.querySelector("#question1Answer").innerHTML = htmlQuestion1Answer;
            }

            if (question2 == "adolfHitler"){
                correct++;
                document.querySelector("#question2Answer").innerHTML = htmlCorrect;
            } else if (question2 !== "") {
                incorrect++;
                document.querySelector("#question2Answer").innerHTML = htmlQuestion2Answer;
            } else if (question2 !== "adolfHitler"){
                unanswered++;
                document.querySelector("#question2Answer").innerHTML = htmlQuestion2Answer;
            }

            if (question3 == "josephStalin"){
                correct++;
                document.querySelector("#question3Answer").innerHTML = htmlCorrect;
            }
            else if (question3 !== "") {
                incorrect++;
                document.querySelector("#question3Answer").innerHTML = htmlQuestion3Answer;
            } else if (question3 !== "josephStalin"){
                unanswered++;
                document.querySelector("#question3Answer").innerHTML = htmlQuestion3Answer;
            }

            if (question4 == "benitoMussolini"){
                correct++;
                document.querySelector("#question4Answer").innerHTML = htmlCorrect;
            }
            else if (question4 !== "") {
                incorrect++;
                document.querySelector("#question4Answer").innerHTML = htmlQuestion4Answer;
            } else if (question4 !== "benitoMussolini") {
                unanswered++;
                document.querySelector("#question4Answer").innerHTML = htmlQuestion4Answer;
            }
            
            if (question5 == "gas"){
                correct++;
                document.querySelector("#question5Answer").innerHTML = htmlCorrect;
            }
            else if (question5 !== "") {
                incorrect++;
                document.querySelector("#question5Answer").innerHTML = htmlQuestion5Answer;
            } else if (question5 !== "gas") {
                unanswered++;
                document.querySelector("#question5Answer").innerHTML = htmlQuestion5Answer;
            }

            if (question6 == "warBonds"){
                correct++;
                document.querySelector("#question6Answer").innerHTML = htmlCorrect;
            }
            else if (question6 !== "") {
                incorrect++;
                document.querySelector("#question6Answer").innerHTML = htmlQuestion6Answer;
            } else if (question6 !== "warBonds") {
                unanswered++;
                document.querySelector("#question6Answer").innerHTML = htmlQuestion6Answer;
            }

            if (question7 == "germanyRetreated"){
                correct++;
                document.querySelector("#question7Answer").innerHTML = htmlCorrect;
            }
            else if (question7 !== "") {
                incorrect++;
                document.querySelector("#question7Answer").innerHTML = htmlQuestion7Answer;
            } else if (question7 !== "germanyRetreated") {
                unanswered++;
                document.querySelector("#question7Answer").innerHTML = htmlQuestion7Answer;
            }

            if (question8 == "hidekiTojo"){
                correct++;
                document.querySelector("#question8Answer").innerHTML = htmlCorrect;
            }
            else if (question8 !== "") {
                incorrect++;
                document.querySelector("#question8Answer").innerHTML = htmlQuestion8Answer;
            } else if (question8 !== "hidekiTojo") {
                unanswered++;
                document.querySelector("#question8Answer").innerHTML = htmlQuestion8Answer;
            }

            if (question9 == "albertEinstein"){
                correct++;
                document.querySelector("#question9Answer").innerHTML = htmlCorrect;
            }
            else if (question9 !== "") {
                incorrect++;
                document.querySelector("#question9Answer").innerHTML = htmlQuestion9Answer;
            } else if (question9 !== "albertEinstein") {
                unanswered++;
                document.querySelector("#question9Answer").innerHTML = htmlQuestion9Answer;
            }

            if (question10 == "franklinRoosevelt"){
                correct++;
                document.querySelector("#question10Answer").innerHTML = htmlCorrect;
            }
            else if (question10 !== "") {
                incorrect++;
                document.querySelector("#question10Answer").innerHTML = htmlQuestion10Answer;
            } else if (question10 !== "franklinRoosevelt") {
                unanswered++;
                document.querySelector("#question10Answer").innerHTML = htmlQuestion10Answer;
            }
        
    
            var htmlScore = "<p>The correct answer = " + correct + "<br>" +
                        "Incorrect Answers = " + incorrect + "<br>" +
                        "Unanswered Questions = " + unanswered;
            document.querySelector("#score").innerHTML = htmlScore;
    }
  }