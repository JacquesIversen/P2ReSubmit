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





       // Getting the question
    const question = document.getElementById("question");

    console.log("dav")
    // Setting the question text
    question.innerText = questions[id].q;
    const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');
    const option3 = document.getElementById('option3');
    option1.innerText = questions[id].answer[0].text;
    option2.innerText = questions[id].answer[1].text;
    option3.innerText = questions[id].answer[2].text;
    option1.value = questions[id].answer[0].isCorrect;
    option2.value = questions[id].answer[1].isCorrect;
    option3.value = questions[id].answer[2].isCorrect;
    console.log("dav igen")
}
startGame = () => {
    question();
  };

  startGame();