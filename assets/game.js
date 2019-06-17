// i is game question counter
let i = 0;
let ansRight = 0;
let ansWrong = 0;

// creating questions answer pairs
const questions = [{
    question: "What is the name of the Orcish Capital?",
    correct: 'Orgrimmar',
    answers: {
        a: "Zandalar",
        b: "Undercity",
        c: "Stormwind",
        d: "Orgrimmar"
    }
},
{
    question: "What is the tallest Wow Race?",
    correct: 'Troll',
    answers: {
        a: "Orc",
        b: "Night Elf",
        c: "Troll",
        d: "Tauren"
    }
},
{
    question: "Who developed WoW?",
    correct: 'Blizzard',
    answers: {
        a: "Blizzard",
        b: "Activision",
        c: "FIFA",
        d: "Infinity Ward"
    }
},
{
    question: "What is the druids owl form called?",
    correct: 'Moonkin',
    answers: {
        a: "Owl Form",
        b: "Moonkin",
        c: "Evertree",
        d: "Murloc"
    }
}
]
// Timer Function
let timeStart = 30;
// reset timer function
const resetTime = function () {
    timeStart = 30;
}
let timer = function () {
    $('#timer').text("Time Remaining on question: " + timeStart + " seconds");
    if (timeStart > 0) {
        timeStart--;
    } else if (timeStart === 0) {
        resetTime();
        i++
        ansWrong++
        questDisp(i);
    }
}
let interval = window.setInterval(timer, 1000);

// displays question to screen
let questDisp = function (j) {
    // if j>3 checks length of question array, if were past the last question it displays results of quiz
    if (j > questions.length) {
        clearInterval(interval);
        $('#timer').empty();
        stop()
        $('#timer').text("Game Over!");
        $("#question").text("Results: ");
        $(".answer1").text("Correct Answers: "+ansRight);
        $(".answer2").text("Answers Wrong: "+ansWrong);
        $(".answer3").text("");
        $(".answer4").text("");

    } else {
        // Display time countdown to screen and window setinterval to iterate
        $('#timer').text("Time Remaining on question: " + timeStart + " seconds");
        $("#question").text(questions[j].question);
        $(".answer1").text(questions[j].answers.a);
        $(".answer2").text(questions[j].answers.b);
        $(".answer3").text(questions[j].answers.c);
        $(".answer4").text(questions[j].answers.d);
    }
}
questDisp(i);
// Stop function

let stop = function(){
    clearTimeout(interval);
    timeStart=30;
};



// on click, checks if answer you clicked is correct or not if so says good job if correct and after 2 seconds resets time and displays next question
// if wrong displays correct answer and resets timer and after 2 seconds goes to next question
$('.answers').on('click', function () {
    if ($(this).text() === questions[i].correct) {
        resetTime();
        stop();
         $('#timer').text("Correct Answer!");
        $("#question").text("Good Job!");
        $(".answer1").text("");
        $(".answer2").text("");
        $(".answer3").text("");
        $(".answer4").text("");
        i++
        setTimeout(function(){
            ansRight++;
            resetTime();
            questDisp(i);
        },4000)
        
    } else if ($(this).text() !== questions[i].correct) {
         $('#timer').text("Wrong Answer!");
        $("#question").text("The horde does not welcome you!");
        $(".answer1").text("Correct Answer was: "+questions[i].correct);
        $(".answer2").text("");
        $(".answer3").text("");
        $(".answer4").text("");
        i++
        stop();
        resetTime();
        setTimeout(function(){
            setInterval(timer,1000);
            ansRight++;
            questDisp(i);
            
        },4000)
    }
})