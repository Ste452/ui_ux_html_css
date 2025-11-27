
// 1. State Variables (Global Escope) ---
const MAX_VALOR = 100;
let correctNumber;
let buttonOptions;
const answerArea = document.getElementById("iasnwer");

// 2. Auxiliary Functions ---

function generateRandomNumber(max) {
  // Reuturn integer between 1 to 100
  return Math.floor(Math.random() * max) + 1;
}

// Initialize Variable when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  buttonOptions = document.querySelectorAll(".buttons > div");
  initNewGame();
});

// --- 3. Game Logic ---

function initNewGame() {
  // 1. Set new correct cumber
  correctNumber = generateRandomNumber(MAX_VALOR);

  // 2. Set which of 5 buttons are receive correct number (index 0 to 4)
  const correctIndex = generateRandomNumber(buttonOptions.length) - 1;

  // Clean answer area
  answerArea.innerHTML = "";

  // 3. Fill in buttons
  buttonOptions.forEach((button, index) => {
    let numberToButton;

    if (index === correctIndex) {
      // This button receive correct number
      numberToButton = correctNumber;
    } else {
      // This number receive a random number different of correct
      do {
        numberToButton = generateRandomNumber(MAX_VALOR);
      } while (numberToButton == correctNumber); // Make sure it's different
    }
    // Display number and remove any previous feedback style
    button.textContent = numberToButton;
    button.classList.remove("Correct", "Wrong");

    // Add listener for click (better than onclick in HTML)
    button.onclick = () => verifyChoice(numberToButton, button);
  });
}

function verifyChoice(choiceNumber, clickedNumber) {
  if (choiceNumber === correctNumber) {
    answerArea.innerHTML =
      '<p class="result-correct">🎉 Congratulations! You got it right the correct number: ' +
      correctNumber +
      "</p>";
    clickedNumber.classList.add("Correct!");
    // Você pode desabilitar os botões ou iniciar o próximo jogo aqui
    setTimeout(initNewGame, 3000); // Inicia um novo jogo após 3 segundos
  } else {
    answerArea.innerHTML =
      '<p class="result-wrong">❌ Wrong! Try again.</p>';
    botaoClicado.classList.add("Wrong");
  }
}

// Navigation function
function openNav() {
  document.getElementById("imySideBar").style.width = "350px";
  // Mudar o padding-left do main é melhor que o margin-left do body,
  // para evitar problemas com outros elementos. Mas mantendo o que você já fez:
  document.body.style.marginLeft = "350px";
  document.body.style.backgroundImage = "";
}

function closeNav() {
  document.getElementById("imySideBar").style.width = "0";
  document.body.style.marginLeft = "0";
  document.body.style.backgroundColor = "#223240";
}