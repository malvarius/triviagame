// i is game question counter
let i = 0;

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
const resetTime = function(){
    timeStart = 30;
}
let timer = function () {
    // Display time countdown to screen
    $('#timer').text("Time Remaining on question: "+timeStart+" seconds");
    if (timeStart>0){
    timeStart--;
    }else if (timeStart===0){
        resetTime();
        i++
        questDisp(i);
    }
    
}
window.setInterval(timer, 1000);

// displays question to screen
let questDisp = function (j) {
    $("#question").text(questions[j].question)
    $(".answer1").text(questions[j].answers.a)
    $(".answer2").text(questions[j].answers.b)
    $(".answer3").text(questions[j].answers.c)
    $(".answer4").text(questions[j].answers.d)
}


questDisp(i);
// on click, checks if answer you clicked is correct or not
$('.answers').on('click', function () {
    if ($(this).text() === questions[i].correct) {
        alert('correct!');
        resetTime();
        i++
        questDisp(i);
    } else if ($(this).text() !== questions[i].correct) {
        alert('Wrong!');
        resetTime();
        i++
        questDisp(i);
    }
})