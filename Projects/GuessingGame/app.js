const questions = {
    '1 + 1 = ?': '2',
    '2 - 3 = ?': '-1',
    '3 + 3 = ?': '6',
    '5 * 2 = ?': '10'
}

const cardBackTemplate = (question) =>
`
    <div class="card-back" onclick="onCardSelected(this)" onanimationend="toggleFace(this)" data-question="${question}"><h2 style="display: none"></h2></div>
`
const questionCardsDiv = document.querySelector('.question-cards');
const answerResponseDiv = document.querySelector('.answer-response h3');


let currentScore = 0;
const scoreText = document.querySelector('.score h3');

const toggleFace = (element) => {
    let cardScoreText = 
        element.children[0];

    if (!element.classList.contains('card-front'))
    {
        element.classList.remove('card-back');
        element.classList.remove('scale-x-down');
        element.classList.add('card-front');

        cardScoreText.style.display = 'block';
    }
}

const onCardSelected = (element) => {
    let question = element.getAttribute('data-question');
    let answer = prompt(question, '');

    let cardScoreText = 
        element.children[0];

    element.classList.add('scale-x-down');

    let correctAnswer = questions[question];
    if (answer !== '')
    {
        if (answer === correctAnswer) {
            answerResponseDiv.innerHTML = 'Correct!'
            cardScoreText.innerHTML = answer;
            cardScoreText.style.color = 'green';

            currentScore += Math.abs(answer);
        } else {
            answerResponseDiv.innerHTML = 'Incorrect!'
            cardScoreText.innerHTML = correctAnswer;
            cardScoreText.style.color = 'red';

            currentScore -= Math.abs(correctAnswer);
        }

        scoreText.innerHTML = 'Score: ' + currentScore;
    } else {
        answerResponseDiv.innerHTML = '';
    }
}

const generateQuestionCards = () => {
    questionCardsDiv.innerHTML = '';
    let questionKeys = Object.keys(questions);
    // console.log(questionKeys);
    for (let i = 0; i < 4; i++) {
        questionCardsDiv.innerHTML += cardBackTemplate(questionKeys[i])
    }
}

window.onload = () => {
    generateQuestionCards();
}