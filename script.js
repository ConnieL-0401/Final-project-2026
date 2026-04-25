const questions = [
    {
        question: "What is Rika?",
        choices: ["Curse spirit", "Sikigami", "Human"],
        answer: "Curse spirit",
        hint: "Think Jujutsu Kaisen."
    },
    {
        question: "What middle school did LeBron James go to?",
        choices: ["Niu Valley", "Oakwood", "Riedinger"],
        answer: "Riedinger",
        hint: "It has an i in it."
    },
    {
        question: "What part of the universe is Megamind's planet in?",
        choices: ["The Alpha Quadrant", "The Glaupunk Quadrant", "The Delta Quadrant"],
        answer: "The Glaupunk Quadrant",
        hint: "It's the weirdest-sounding one."
    },
    {
        question: "What was Luffy's first bounty?",
        choices: ["20,000", "30,000,000", "1,000"],
        answer: "30,000,000",
        hint: "Its has more that 3 zeros."
    },
    {
        question: "How long have horseshoe crabs been alive as a species?",
        choices: ["450,000,000 years", "500,000 years", "128,000,000 months"],
        answer: "450,000,000 years",
        hint: "They are extremely ancient."
    }
];

let current = 0;

const questionText = document.getElementById("question-text");
const choicesDiv = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const roomNumber = document.getElementById("room-number");
const hintText = document.getElementById("hint-text");
const revealText = document.getElementById("reveal-text");

function loadQuestion() {
    const q = questions[current];

    roomNumber.textContent = `Room ${current + 1}`;
    questionText.textContent = q.question;
    hintText.textContent = "";
    revealText.textContent = "";
    feedback.textContent = "";

    choicesDiv.innerHTML = "";
    q.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.classList.add("choice-btn");
        btn.textContent = choice;
        btn.onclick = () => checkAnswer(choice);
        choicesDiv.appendChild(btn);
    });
}

function checkAnswer(choice) {
    if (choice === questions[current].answer) {
        feedback.style.color = "lightgreen";
        feedback.textContent = "Correct! Moving to next room...";
        current++;

        setTimeout(() => {
            if (current < questions.length) {
                loadQuestion();
            } else {
                questionText.textContent = "You completed all rooms!";
                choicesDiv.innerHTML = "";
                roomNumber.textContent = "Victory";
            }
        }, 1000);

    } else {
        feedback.style.color = "red";
        feedback.textContent = "Incorrect. Try again.";
    }
}

document.getElementById("hint-btn").onclick = () => {
    hintText.textContent = "Hint: " + questions[current].hint;
};

document.getElementById("reveal-btn").onclick = () => {
    revealText.textContent = "Answer: " + questions[current].answer;
};

loadQuestion();
