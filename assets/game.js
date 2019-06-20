var game = function(){
// i is game question counter ansRight and wrong are counters
let i = 0;
let ansRight = 0;
let ansWrong = 0;

// creating questions answer pairs
const questions = [{
    question: "What is the name of the Orcish Capital?",
    correct: 'Orgrimmar',
    image: $("<img id ='correctPic'>").attr('src','./assets/org.jpg'),
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
    image: $("<img id ='correctPic'>").attr('src','./assets/troll.jpg'),
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
    image: $("<img id ='correctPic'>").attr('src','./assets/blizz.jpg'),
    answers: {
        a: "Blizzard",
        b: "Activision",
        c: "FIFA",
        d: "Infinity Ward"
    }
},
{
    question: "What is the druid's owl form called?",
    correct: 'Moonkin',
    image: $("<img id ='correctPic'>").attr('src','./assets/moon.jpg'),
    answers: {
        a: "Owl Form",
        b: "Moonkin",
        c: "Evertree",
        d: "Murloc"
    }
},
    {
        question: "What is the coolest race?",
        correct: 'Tauren',
        answers: {
            a: 'Tauren',
            b: 'Tauren',
            c: 'Tauren',
            d: 'Tauren'
        }
}
]
// const of array length
const length = questions.length-1;
console.log(length);
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
    } else if (timeStart === 0 && i<4) {
        resetTime();
        i++
        ansWrong++
        questDisp(i);
    }
}
// sets original interval of function 'timer' saved as variable
let interval = window.setInterval(timer, 1000);

// function displays question to screen
const questDisp = function (j) {
    // if j>length checks length of question array, if were past the last question it displays results of quiz
    if (j > length) {
        clearInterval(interval);
        $('#timer').empty();
        stop()
        $('#timeRem').text("Game Over!");
        $("#question").text("Results: ");
        $(".answer1").text("Correct Answers: "+ansRight);
        $(".answer2").text("Answers Wrong: "+ansWrong);
        $(".answer3").text("Play Again!!!");
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
// running the function questDisp of count i, all questions and related answers are based on counter i
questDisp(i);
// Stop function
const stop = function(){
    clearTimeout(interval);
    timeStart=30;
};



// on click, checks if answer you clicked is correct or not if so says good job if correct and after 2 seconds resets time and displays next question
// if wrong displays correct answer and resets timer and after 2 seconds goes to next question
$('.answers').on('click', function () {
    stop();
    $('#timer').empty();

if($(this).text() === "Play Again!!!"){
    // if user clicks play again, reloads page
    location.reload();
}else if ($(this).text() === questions[i].correct) {
    // correct answer says GJ and resets interval
         $('#timer').html("Correct Answer!");
        $("#question").text("Good Job!");
        $(".answer1").empty();
        $(".answer2").empty();
        $(".answer2").append(questions[i].image);
        $(".answer3").empty();
        $(".answer4").empty();
        i++
        const timeout = setTimeout(function(){
            resetTime();
          interval = setInterval(timer,1000);
            ansRight++;
            questDisp(i);
            clearTimeout(timeout);
        },4000)

        // incorrect question displays correct answer and resets timer and interval
    } else if ($(this).text() !== questions[i].correct) {
         $('#timer').html("Wrong Answer!");
        $("#question").text("The horde does not welcome you!");
        $(".answer1").text("Correct Answer was: "+questions[i].correct);
        $(".answer2").empty();
        $(".answer2").append(questions[i].image);
        $(".answer3").text("");
        $(".answer4").text("");
        
       const timeout = setTimeout(function(){
            i++
            resetTime();
            interval = setInterval(timer,1000);
            ansWrong++;
            questDisp(i);
            clearTimeout(timeout)
            
        },4000)
    }
})
}

$('#timer').html("Press Spacebar to begin!");

document.onkeyup = function(e){
    if (e.key===' '){
        game();
    }
}
