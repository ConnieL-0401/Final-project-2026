document.getElementById("submitBtn").addEventListener("click", checkAnswers);

function checkAnswers() {
    const correctAnswers = {
        q1: "Curse spirit",
        q2: "",
        q3: "Teak",
        q4: "Cambium",
        q5: "Mahogany"
    };

    let allCorrect = true;

    for (let q in correctAnswers) {
        let selected = document.querySelector(`input[name="${q}"]:checked`);
        if (!selected || selected.value !== correctAnswers[q]) {
            allCorrect = false;
        }
    }

    const resultDiv = document.getElementById("result");
    const explosionImg = document.getElementById("explosion");

    if (allCorrect) {
        resultDiv.textContent = "✅ All answers correct! Well done!";
        explosionImg.style.display = "none";
    } else {
        resultDiv.textContent = "💥 Wrong answer";
        explosionImg.style.display = "block";
    }
}