const choices = Array.from(document.getElementsByClassName("q-button"));
let nextButton;
let questionsAnswers;
let questionCounter;

const questions = [
    { id: 0, q: "Why does bird fly?",
        answer: [
            {option: "They have no legs", isCorrect: false},
            {option: "Because the Earth is flat", isCorrect: false},
            {option: "Because they bloody can!", isCorrect: true},
        ]},
    { id: 1, q: "What can one catch, that isn't thrown?",
        answer: [
            {option: "A child with bad behavior", isCorrect: false},
            {option: "A cold", isCorrect: true},
            {option: "Feelings", isCorrect: false},
        ]},
        { id: 2, q: "Some months have 31 days some 30, but how many have 28?",
        answer: [
            {option: "Merry Christmas", isCorrect: false},
            {option: "All of them", isCorrect: true},
            {option: "February", isCorrect: false},
        ]},
        { id: 3, q: "Who is bigger, Mr. Bigger, Mrs. Bigger, or their baby?",
        answer: [
            {option: "Mr. Bigger", isCorrect: false},
            {option: "Mrs. Bigger", isCorrect: false},
            {option: "Baby Bigger", isCorrect: true},
        ]}
];

startGame = () => {
    questionCounter = 0;
    //availableQuestions = [...questions];
    nextQuestion();
  };


  nextQuestion = () => {
    questionCounter++;
    console.log(questionCounter);
    nextButton = document.getElementById("next-button")
    nextButton.disabled = true
    nextButton.style.background = "grey"
    var questionId = questionCounter-1
    // Setting the question text
    const questionText = questions[questionId].q;
    const questionTextDiv = document.getElementById("questionText");
    questionTextDiv.innerText = questionText;
    questionsAnswers = questions[questionId].answer
    console.log(questionsAnswers)

    for (let i=0; i<questionsAnswers.length; i++) {
        // const answerOption = questions[i].answer
        console.log(questionsAnswers[i])
        const option = document.getElementById('option'+i);
        option.innerText = questionsAnswers[i].option
        option.value = questionsAnswers[i].isCorrect
    }

    //const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');
    const option3 = document.getElementById('option3');
    //option1.innerText = questions[id].answer[0].option;
    //option2.innerText = questions[id].answer[1].option;
    //option3.innerText = questions[id].answer[2].option;
    //option1.value = questions[id].answer[0].isCorrect;
    //option2.value = questions[id].answer[1].isCorrect;
    //option3.value = questions[id].answer[2].isCorrect;
    console.log("dav igen")

  }


onclickAnswer = (value) => {
    console.log(value)
    alert("Your Answer was " + value)
    for (let i=0; i<questionsAnswers.length; i++) {
        const option = document.getElementById('option'+i);
        console.log(option.value)
        if(option.value === true) {
            option.style.background = "green"
        }
    }
    nextButton.disabled = false
    nextButton.style.background = "blue"
}

onclickNext = () => {
    for (let i=0; i<questionsAnswers.length; i++) {
        const option = document.getElementById('option'+i);
        console.log(option.value)
            option.style.background = "red"
}

if (questionCounter === questions.length) {
    console.log("should go to end")
    return window.location.assign("/end.html");
} else {
    nextQuestion();
}
}


// Next page loading via button. has answered true. 
// conditional rendering.
// 

startGame();