//start button
function start() {
    document.getElementById('showGame').style.display = "block";
    document.getElementById('timerRow').style.display = "none";
    $("#show-number").html("<center><h2>Time Remaining:" + " " + number + "</h2></center>");
    run();
}

//timer
var number = 35;
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
    $("#show-number").html("<center><h2>Time Remaining:" + " " + number + "</h2></center>");

    //  Once number hits zero...
    if (number === 0) {
        clearInterval(intervalId);
        check();
    }

    //runs the check answers function
    function check() {
        var unanswered = 0;
        var correct = 0;
        var incorrect = 0;

        //stores the selected answers into variables
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

        //html output for the correct answers
        var htmlCorrect = "<br><strong>Correct!</strong><br>";
        var htmlQuestion1Answer = "<br><p>The correct Answer is <strong>Manchuria</strong>.</p><br>";
        var htmlQuestion2Answer = "<br><p>The correct Answer is <strong>Adolf Hitler</strong>.</p><br>";
        var htmlQuestion3Answer = "<br><p>The correct Answer is <strong>Joseph Stalin</strong>.</p><br>";
        var htmlQuestion4Answer = "<br><p>The correct Answer is <strong>Benito Mussolini</strong>.</p><br>";
        var htmlQuestion5Answer = "<br><p>The correct Answer is <strong>gas</strong>.</p><br>";
        var htmlQuestion6Answer = "<br><p>The correct Answer is <strong>War Bonds</strong>.</p><br>";
        var htmlQuestion7Answer = "<br><p>The correct Answer is <strong>Germany retreated for the 1st time</strong>.</p><br>";
        var htmlQuestion8Answer = "<br><p>The correct Answer is <strong>Hideki Tojo</strong>.</p><br>";
        var htmlQuestion9Answer = "<br><p>The correct Answer is <strong>Albert Einstein</strong>.</p><br>";
        var htmlQuestion10Answer = "<br><p>The correct Answer is <strong>Franklin Roosevelt</strong>.</p><br>";

        //compares questions and answers
        if (question1 == "manchuria") {
            correct++;
            document.querySelector("#question1Answer").innerHTML = htmlCorrect;
        } else if (question1 !== "") {
            incorrect++;
            document.querySelector("#question1Answer").innerHTML = htmlQuestion1Answer;
        } else if (question1 !== "manchuria") {
            unanswered++;
            document.querySelector("#question1Answer").innerHTML = htmlQuestion1Answer;
        }

        if (question2 == "adolfHitler") {
            correct++;
            document.querySelector("#question2Answer").innerHTML = htmlCorrect;
        } else if (question2 !== "") {
            incorrect++;
            document.querySelector("#question2Answer").innerHTML = htmlQuestion2Answer;
        } else if (question2 !== "adolfHitler") {
            unanswered++;
            document.querySelector("#question2Answer").innerHTML = htmlQuestion2Answer;
        }

        if (question3 == "josephStalin") {
            correct++;
            document.querySelector("#question3Answer").innerHTML = htmlCorrect;
        } else if (question3 !== "") {
            incorrect++;
            document.querySelector("#question3Answer").innerHTML = htmlQuestion3Answer;
        } else if (question3 !== "josephStalin") {
            unanswered++;
            document.querySelector("#question3Answer").innerHTML = htmlQuestion3Answer;
        }

        if (question4 == "benitoMussolini") {
            correct++;
            document.querySelector("#question4Answer").innerHTML = htmlCorrect;
        } else if (question4 !== "") {
            incorrect++;
            document.querySelector("#question4Answer").innerHTML = htmlQuestion4Answer;
        } else if (question4 !== "benitoMussolini") {
            unanswered++;
            document.querySelector("#question4Answer").innerHTML = htmlQuestion4Answer;
        }

        if (question5 == "gas") {
            correct++;
            document.querySelector("#question5Answer").innerHTML = htmlCorrect;
        } else if (question5 !== "") {
            incorrect++;
            document.querySelector("#question5Answer").innerHTML = htmlQuestion5Answer;
        } else if (question5 !== "gas") {
            unanswered++;
            document.querySelector("#question5Answer").innerHTML = htmlQuestion5Answer;
        }

        if (question6 == "warBonds") {
            correct++;
            document.querySelector("#question6Answer").innerHTML = htmlCorrect;
        } else if (question6 !== "") {
            incorrect++;
            document.querySelector("#question6Answer").innerHTML = htmlQuestion6Answer;
        } else if (question6 !== "warBonds") {
            unanswered++;
            document.querySelector("#question6Answer").innerHTML = htmlQuestion6Answer;
        }

        if (question7 == "germanyRetreated") {
            correct++;
            document.querySelector("#question7Answer").innerHTML = htmlCorrect;
        } else if (question7 !== "") {
            incorrect++;
            document.querySelector("#question7Answer").innerHTML = htmlQuestion7Answer;
        } else if (question7 !== "germanyRetreated") {
            unanswered++;
            document.querySelector("#question7Answer").innerHTML = htmlQuestion7Answer;
        }

        if (question8 == "hidekiTojo") {
            correct++;
            document.querySelector("#question8Answer").innerHTML = htmlCorrect;
        } else if (question8 !== "") {
            incorrect++;
            document.querySelector("#question8Answer").innerHTML = htmlQuestion8Answer;
        } else if (question8 !== "hidekiTojo") {
            unanswered++;
            document.querySelector("#question8Answer").innerHTML = htmlQuestion8Answer;
        }

        if (question9 == "albertEinstein") {
            correct++;
            document.querySelector("#question9Answer").innerHTML = htmlCorrect;
        } else if (question9 !== "") {
            incorrect++;
            document.querySelector("#question9Answer").innerHTML = htmlQuestion9Answer;
        } else if (question9 !== "albertEinstein") {
            unanswered++;
            document.querySelector("#question9Answer").innerHTML = htmlQuestion9Answer;
        }

        if (question10 == "franklinRoosevelt") {
            correct++;
            document.querySelector("#question10Answer").innerHTML = htmlCorrect;
        } else if (question10 !== "") {
            incorrect++;
            document.querySelector("#question10Answer").innerHTML = htmlQuestion10Answer;
        } else if (question10 !== "franklinRoosevelt") {
            unanswered++;
            document.querySelector("#question10Answer").innerHTML = htmlQuestion10Answer;
        }

        //displays the correct, incorrect, and unanswered questions.
        var htmlScore = "<p>The correct answer = <strong>" + correct + "</strong><br>" +
            "Incorrect Answers = <strong>" + incorrect + "</strong><br>" +
            "Unanswered Questions = <strong>" + unanswered + "</strong>";
        document.querySelector("#score").innerHTML = htmlScore;
    }
}