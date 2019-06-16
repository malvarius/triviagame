// creating questions answer pairs

const questions = [{
    question: "What is the name of the Orcish Capital?",
    correct: 'd',
    answers: {
        a: "Zandalar",
        b: "Undercity",
        c: "Stormwind",
        d: "Orgrimmar"
    }
},
{
    question: "What is the tallest Wow Race?",
    correct: 'c',
    answers: {
        a: "Orc",
        b: "Night Elf",
        c: "Troll",
        d: "Tauren"
    }
},
{
    question: "Who developed WoW?",
    correct: 'a',
    answers: {
        a: "Blizzard",
        b: "Activision",
        c: "FIFA",
        d: "Infinity Ward"
    }
},
{
    question: "What is the tallest Wow Race?",
    correct: 'c',
    answers: {
        a: "Orc",
        b: "Night Elf",
        c: "Troll",
        d: "Tauren"
    }
}
]

// displays question to screen
let questDisp = function () { 
    for (i=0;i<questions.length;i++)
$("#question").text(questions[0].question)
$(".answer1").text(questions[0].answers.a)
$(".answer2").text(questions[0].answers.b)
$(".answer3").text(questions[0].answers.c)
$(".answer4").text(questions[0].answers.d)
}
questDisp();