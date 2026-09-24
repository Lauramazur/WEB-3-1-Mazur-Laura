function calculateSum(a, b) {
    return a + b;
}

console.log(calculateSum(5, 3));
console.log(calculateSum(10, 7));
const student = {
    name: "Laura",
    age: 18,
    grade: 9,

    introduce: function() {
        console.log("Sunt " + this.name + " și am " + this.age + " ani.");
    }
};

student.introduce();

student.grade = 10;

console.log("Noua notă:", student.grade);
const choices = ["piatra", "hartia", "foarfeca"];
const gameScore = {
    player: 0,
    computer: 0,
    draws: 0,

    displayScore: function() {
        document.getElementById("score").textContent =
            "Tu: " + this.player +
            " | Calculator: " + this.computer +
            " | Egalități: " + this.draws;
    }
};
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function determineWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        gameScore.draws++;
        return "Egalitate!";
    }

    if (
        (playerChoice === "piatra" && computerChoice === "foarfeca") ||
        (playerChoice === "foarfeca" && computerChoice === "hartia") ||
        (playerChoice === "hartia" && computerChoice === "piatra")
    ) {
        gameScore.player++;
        return "Ai câștigat!";
    }

    gameScore.computer++;
    return "Calculatorul a câștigat!";
}
function playGame(playerChoice) {

    const computerChoice = getComputerChoice();

    const result = determineWinner(playerChoice, computerChoice);

    document.getElementById("playerChoice").textContent =
        "Alegerea ta: " + playerChoice;

    document.getElementById("computerChoice").textContent =
        "Alegerea calculatorului: " + computerChoice;

    document.getElementById("result").textContent =
        "Rezultat: " + result;

    gameScore.displayScore();
}
document.getElementById("rock").addEventListener("click", function() {
    playGame("piatra");
});

document.getElementById("paper").addEventListener("click", function() {
    playGame("hartia");
});

document.getElementById("scissors").addEventListener("click", function() {
    playGame("foarfeca");
});