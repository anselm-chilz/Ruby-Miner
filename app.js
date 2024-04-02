let score = 0;
let clickValue = 1;
let perSecondValue = 0;
let perSecondInterval;
let Shovel = 10;
let Blast = 50;
let Refinery = 100;
let perSecondUpgradeCost = 1;

const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('clickButton');
const upgrade1Button = document.getElementById('upgrade1');
const upgrade2Button = document.getElementById('upgrade2');
const upgrade3Button = document.getElementById('upgrade3');
const perSecondUpgradeButton = document.getElementById('perSecondUpgrade');

clickButton.addEventListener('click', () => {
  score += clickValue;
  updateScore();
});

upgrade1Button.addEventListener('click', () => {
  if (score >= Shovel) {
    score -= Shovel;
    clickValue += 1;
    Shovel *= 2;
    updateScore();
    updateUpgrades();
  }
});

upgrade2Button.addEventListener('click', () => {
  if (score >= Blast) {
    score -= Blast;
    clickValue += 5;
    Blast *= 2;
    updateScore();
    updateUpgrades();
  }
});

upgrade3Button.addEventListener('click', () => {
  if (score >= Refinery) {
    score -= Refinery;
    clickValue += 10;
    Refinery *= 2;
    updateScore();
    updateUpgrades();
  }
});

perSecondUpgradeButton.addEventListener('click', () => {
  if (score >= perSecondUpgradeCost) {
    score -= perSecondUpgradeCost;
    perSecondValue++;
    perSecondUpgradeCost *= 2;
    updateScore();
    updateUpgrades();
  }
});

function updateScore() {
  scoreDisplay.textContent = score;
}

function updateUpgrades() {
  upgrade1Button.textContent = `Shovel - Cost: ${Shovel}`;
  upgrade2Button.textContent = `Blast - Cost: ${Blast}`;
  upgrade3Button.textContent = `Refinery - Cost: ${Refinery}`;
  perSecondUpgradeButton.textContent = `Per Second Upgrade - Cost: ${perSecondUpgradeCost}`;
}

function startPerSecondIncrement() {
  perSecondInterval = setInterval(() => {
    score += perSecondValue;
    updateScore();
  }, 1000);
}

// Start automatic score increment
startPerSecondIncrement();
updateUpgrades();
