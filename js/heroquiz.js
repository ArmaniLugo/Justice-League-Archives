console.log("hero file")
function submitQuiz() {
    const questions = document.querySelectorAll('.question');
    let scores = {
        superman: 0,
        batman: 0,
        wonderwoman: 0,
        flash: 0
    };

    questions.forEach(question => {
        const selectedAnswer = question.querySelector('input[type="radio"]:checked');
        if (selectedAnswer) {
            scores[selectedAnswer.value]++;
        }
    });

    const highestScore = Math.max(scores.superman, scores.batman, scores.wonderwoman, scores.flash);
    let result = '';
    
    for (let hero in scores) {
        if (scores[hero] === highestScore) {
            result = hero.charAt(0).toUpperCase() + hero.slice(1);
            break;
        }
    }

    document.getElementById('superhero').textContent = result;
    document.getElementById('result').style.display = 'block';
}
