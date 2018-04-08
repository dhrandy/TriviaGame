function check () {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var correct = 0;
    var incorrect = 0;

    var htmlCorrect = "Correct!";
    var htmlQuestion1Answer = "<p>The correct Answer is Manchuria.</p>";
    var htmlQuestion2Answer = "<p>The correct Answer is Adolf Hitler.</p>";

        if (question1 == "manchuria"){
            correct++;
            console.log("correct 1 = " + correct);
            document.querySelector("#question1Answer").innerHTML = htmlCorrect;
        }
        else if (question1 !== "manchuria") {
            incorrect++;
            console.log("incorrect 1 = " + incorrect);
            document.querySelector("#question1Answer").innerHTML = htmlQuestion1Answer;
        }
        if (question2 == "adolfHitler"){
            correct++;
            console.log("correct 2 = " + correct);
            document.querySelector("#question2Answer").innerHTML = htmlCorrect;
        }
        else if (question2 !== "adolfHitler") {
            incorrect++;
            console.log("incorrect 2 = "+incorrect);
            document.querySelector("#question2Answer").innerHTML = htmlQuestion2Answer;
        }

        var htmlScore = "<p>Correct Answers = " + correct + "<br>" +
                    "Incorrect Answers = " + incorrect + "</p>";
        document.querySelector("#score").innerHTML = htmlScore;

    console.log("total correct= "+correct);
    console.log("total  incorrect= "+incorrect);
}