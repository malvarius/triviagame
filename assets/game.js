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
let timer = function () {
    timeStart--;
    // Display time countdown to screen


}
window.setInterval(timer, 1000);

// displays question to screen
let i = 0;
let questDisp = function () {
    $("#question").text(questions[i].question)
    $(".answer1").text(questions[i].answers.a)
    $(".answer2").text(questions[i].answers.b)
    $(".answer3").text(questions[i].answers.c)
    $(".answer4").text(questions[i].answers.d)
}


questDisp();
// on click, checks if answer you clicked is correct or not
$('.answers').on('click', function () {
    if ($(this).text() === questions[0].correct) {
        alert('correct!');
    } else if ($(this).text() !== questions[0].correct) {
        alert('Wrong!');
    }
})