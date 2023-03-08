let nextButton;
let questionsAnswers;
let questionCounter;
let correctAnswers = 0;

const questions = [
    { id: 0, q: "Why does birds fly?",
        answer: [
            {option: "They have no legs", isCorrect: false},
            {option: "Because the Earth is flat", isCorrect: false},
            {option: "Because they bloody can!", isCorrect: true},
        ]},
    { id: 1, q: "What can one catch, that isn't thrown?",
        answer: [
            {option: "A child with bad behavior", isCorrect: false},
            {option: "a cold", isCorrect: true},
            {option: "A computer from a frustrated programmer", isCorrect: false},
        ]},
        { id: 2, q: "Which month has 28 days?",
        answer: [
            {option: "Merry Christmas", isCorrect: false},
            {option: "All of them", isCorrect: true},
            {option: "February", isCorrect: false},
        ],
        explainer: "Duuuh.... All months have 28."
    },
        { id: 3, q: "Who is bigger, Mr. Bigger, Mrs. Bigger, or their baby?",
        answer: [
            {option: "Mr. Bigger", isCorrect: false},
            {option: "Mrs. Bigger", isCorrect: false},
            {option: "Baby Bigger", isCorrect: true},
        ], explainer: "Baby Bigger is a little Bigger"}
];

startGame = () => {
    questionCounter = 0;
    nextQuestion();
  };


  nextQuestion = () => {
    questionCounter++;
    console.log(questionCounter);
    nextButton = document.getElementById("next-button");
    nextButton.disabled = true;
    nextButton.style.background = "grey";
    console.log(nextButton);
    var questionId = questionCounter-1;
    const questionText = questions[questionId].q;
    const questionTextDiv = document.getElementById("questionText");
    questionTextDiv.innerText = questionText;
    questionsAnswers = questions[questionId].answer;
    console.log(questionsAnswers);

    for (let i=0; i<questionsAnswers.length; i++) {
        const option = document.getElementById('option'+i);
        option.innerText = questionsAnswers[i].option;
        option.value = questionsAnswers[i].isCorrect;
    }
  };


onclickAnswer = (value) => {
    if(value === true) { 
        document.getElementById("q-answered-text").innerHTML = "Correct!";
        correctAnswers++;
        } else {
            if(questions[questionCounter-1].explainer) {
                document.getElementById("q-answered-text").innerHTML = questions[questionCounter-1].explainer;
            } else {
            document.getElementById("q-answered-text").innerHTML = "Your answer was incorrect";
        }}
    for (let i=0; i<questionsAnswers.length; i++) {
        const option = document.getElementById('option'+i);
        console.log(option.value);
        if(option.value === true) {
            option.style.background = "green";
        } else {
            option.style.background = "red";
        }
    }
    nextButton.disabled = false;
    nextButton.style.background = "blue";
};

onclickNext = () => {
    for (let i=0; i<questionsAnswers.length; i++) {
        const option = document.getElementById('option'+i);
        console.log(option.value);
            option.style.background = "white";
}
document.getElementById("q-answered-text").innerHTML = "Click on your answer";
if (questionCounter === questions.length) {
    localStorage.setItem("score", correctAnswers);
    localStorage.setItem("totalQuestions", questions.length);
    return window.location.assign("end.html");
} else {
    nextQuestion();
}};


startGame();