const myQuestions = [
    {
        question: 'Javascript is ______ language.',
        answer: {
            a: 'False',
            b: 'False',
            c: 'False',
            d: 'True',
        },
        multi: false,
        correctAnswer: 'd',
    },
    {
        question: 'Javascript is ______ language.',
        answer: {
            a: 'True',
            b: 'False',
            c: 'False',
            d: 'False',
        },
        multi: false,
        correctAnswer: 'a',
    }
];

const quiz = document.getElementById('quiz');
const submit = document.getElementById('submit');
const result = document.getElementById('result');
const btnSubmmit = document.getElementById('btnSubmit');

var indexQuiz = 0;
var lastQuiz = myQuestions.length - 1;
var point = 0;

function showQuiz() {
    var output = [];

    var answersCurrent = myQuestions[indexQuiz].answer;

    var answer = [];

    for (var property in answersCurrent) {
        answer.push(
            `<label class="answer">
            <input type="radio" name="question${indexQuiz}" value="${property}">
            ${property} :
            ${answersCurrent[property]}
          </label>`
        );
    }

    output.push(
        `<div class="question"><h3> ${indexQuiz + 1}. ${ myQuestions[indexQuiz].question }</h3></div>
        <div class="answers"> ${answer.join('')} </div>`
    );

    quiz.innerHTML = output.join('');
}

function checkResult() {
    var answers = quiz.querySelectorAll('.answers');

    var answer = answers[0];

    var selector = `input[name=question${indexQuiz}]:checked`;

    var answerSelect = (answer.querySelector(selector) || {}).value;

    if(answerSelect === myQuestions[indexQuiz].correctAnswer) {
        point = point + 1;
    }
}

function showResult() {
    result.innerHTML = `Result: ${point} / ${myQuestions.length}`;
}

function nextQuiz() {
    if (indexQuiz < lastQuiz) {
        checkResult();
        indexQuiz = indexQuiz + 1;
        showQuiz();
    } else {
        checkResult();
        showResult();
        btnSubmmit.disabled = true;
    }
}

showQuiz();

submit.addEventListener('click', nextQuiz);

