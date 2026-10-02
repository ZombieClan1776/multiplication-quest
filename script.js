let score = 0;
let correctAnswer = 0;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function nextQuestion() {

    let a = randomNumber(2, 12);
    let b = randomNumber(2, 12);

    correctAnswer = a * b;

    document.getElementById("question").innerHTML =
        `${a} × ${b} = ?`;

    document.getElementById("feedback").innerHTML = "";

    createAnswers();
}

function createAnswers() {

    let answers = [correctAnswer];

    while (answers.length < 4) {

        let wrong =
            correctAnswer + randomNumber(-10, 10);

        if (
            wrong > 0 &&
            !answers.includes(wrong)
        ) {
            answers.push(wrong);
        }
    }

    answers.sort(() => Math.random() - 0.5);

    let html = "";

    answers.forEach(answer => {

        html += `
        <button
        class="answerBtn"
        onclick="checkAnswer(${answer})">
        ${answer}
        </button>`;
    });

    document.getElementById("answers").innerHTML =
        html;
}

function checkAnswer(answer) {

    if (answer === correctAnswer) {

        score += 10;

        document.getElementById("feedback").innerHTML =
            "✅ Correct!";

    } else {

        document.getElementById("feedback").innerHTML =
            `❌ Answer: ${correctAnswer}`;
    }

    document.getElementById("score").innerHTML =
        `Score: ${score}`;
}

nextQuestion();
