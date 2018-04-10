//start button
function start() {
    document.getElementById('showGame').style.display = "block";
    document.getElementById('startButton').style.display = "none";
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

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#show-number").html("<h2>Time Remaining" + " " + number + "</h2>");

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
        var htmlQuestion1Answer = "<p>The correct Answer is Manchuria.</p>";
        var htmlQuestion2Answer = "<p>The correct Answer is Adolf Hitler.</p>";
        var htmlQuestion3Answer = "<p>The correct Answer is Joseph Stalin.</p>";
        var htmlQuestion4Answer = "<p>The correct Answer is Benito Mussolini.</p>";
        var htmlQuestion5Answer = "<p>The correct Answer is gas.</p>";
        var htmlQuestion6Answer = "<p>The correct Answer is War Bonds</p>";
        var htmlQuestion7Answer = "<p>The correct Answer is Germany retreated for the 1st time.</p>";
        var htmlQuestion8Answer = "<p>The correct Answer is Hideki Tojo</p>";
        var htmlQuestion9Answer = "<p>The correct Answer is Albert Einstein</p>";
        var htmlQuestion10Answer = "<p>The correct Answer is Franklin Roosevelt</p>";
    
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

            if (question3 == "Joseph Stalin"){
                correct++;
                console.log("correct 3 = " + correct);
                document.querySelector("#question3Answer").innerHTML = htmlCorrect;
            }
            else if (question3 == ("georgyMalenkov" || "vladimirLenin" || "Nikita Khrushchev")) {
                incorrect++;
                console.log("incorrect 3 = "+incorrect);
                document.querySelector("#question3Answer").innerHTML = htmlQuestion3Answer;
            } else {
                unanswered++;
            }

            if (question4 == "benitoMussolini"){
                correct++;
                console.log("correct 4 = " + correct);
                document.querySelector("#question4Answer").innerHTML = htmlCorrect;
            }
            else if (question4 == ("antonioSalandra" || "luigiFacta" || "pietroBadoglio")) {
                incorrect++;
                console.log("incorrect 4 = "+incorrect);
                document.querySelector("#question4Answer").innerHTML = htmlQuestion4Answer;
            } else {
                unanswered++;
            }
            
            if (question5 == "gas"){
                correct++;
                console.log("correct 5 = " + correct);
                document.querySelector("#question5Answer").innerHTML = htmlCorrect;
            }
            else if (question5 == ("water" || "oil" || "iron")) {
                incorrect++;
                console.log("incorrect 5 = "+incorrect);
                document.querySelector("#question5Answer").innerHTML = htmlQuestion5Answer;
            } else {
                unanswered++;
            }

            if (question6 == "warBonds"){
                correct++;
                console.log("correct 6 = " + correct);
                document.querySelector("#question6Answer").innerHTML = htmlCorrect;
            }
            else if (question6 == ("automobiles" || "stamps" || "water")) {
                incorrect++;
                console.log("incorrect 6 = "+incorrect);
                document.querySelector("#question6Answer").innerHTML = htmlQuestion6Answer;
            } else {
                unanswered++;
            }

            if (question7 == "germanyRetreated"){
                correct++;
                console.log("correct 7 = " + correct);
                document.querySelector("#question7Answer").innerHTML = htmlCorrect;
            }
            else if (question7 == ("japanWas" || "italyRetreated" || "germanycouldnt")) {
                incorrect++;
                console.log("incorrect 7 = "+incorrect);
                document.querySelector("#question7Answer").innerHTML = htmlQuestion7Answer;
            } else {
                unanswered++;
            }

            if (question8 == "hidekiTojo"){
                correct++;
                console.log("correct 8 = " + correct);
                document.querySelector("#question8Answer").innerHTML = htmlCorrect;
            }
            else if (question8 == ("mitsumasaYonai" || "koisoKuniaki" || "kantaroSuzuki")) {
                incorrect++;
                console.log("incorrect 8 = "+incorrect);
                document.querySelector("#question8Answer").innerHTML = htmlQuestion8Answer;
            } else {
                unanswered++;
            }

            if (question9 == "albertEinstein"){
                correct++;
                console.log("correct 9 = " + correct);
                document.querySelector("#question9Answer").innerHTML = htmlCorrect;
            }
            else if (question9 == ("robertOppenhiemer" || "cliffordBerry" || "percySpencer")) {
                incorrect++;
                console.log("incorrect 9 = "+incorrect);
                document.querySelector("#question9Answer").innerHTML = htmlQuestion9Answer;
            } else {
                unanswered++;
            }

            if (question10 == "franklinRoosevelt"){
                correct++;
                console.log("correct 10 = " + correct);
                document.querySelector("#question10Answer").innerHTML = htmlCorrect;
            }
            else if (question3 == ("harryTruman" || "herbertHoover" || "dwightEisenhower")) {
                incorrect++;
                console.log("incorrect 10 = "+incorrect);
                document.querySelector("#question10Answer").innerHTML = htmlQuestion10Answer;
            } else {
                unanswered++;
            }
        
    
            var htmlScore = "<p>The correct Answer isCorrect Answers = " + correct + "<br>" +
                        "Incorrect Answers = " + incorrect + "<br>" +
                        "Unanswered Questions = " + unanswered + "</p>The correct Answer is";
            document.querySelector("#score").innerHTML = htmlScore;
    
        console.log("total correct= "+correct);
        console.log("total  incorrect= "+incorrect);

        

        
        
    



    }
  }