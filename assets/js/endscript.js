const score = localStorage.getItem("score")
const totalQuestions = localStorage.getItem("totalQuestions")

document.getElementById("final-score").innerHTML = `You scored ${score} / ${totalQuestions}`