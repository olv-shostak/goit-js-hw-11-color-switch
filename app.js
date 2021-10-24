const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const buttonStartRef = document.querySelector('[data-action="start"]');
const buttonStopRef = document.querySelector('[data-action="stop"]');

buttonStartRef.addEventListener('click', colorSwitch);
buttonStopRef.addEventListener('click', removeColorSwitch);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function colorSwitch() {
  timeoutId = setInterval(() => {
    bodyColor(colors);
  }, 1000);
  buttonStartRef.setAttribute('disabled', true);
}

function removeColorSwitch() {
  clearTimeout(timeoutId);
  buttonStartRef.removeAttribute('disabled');
}

function bodyColor(colors) {
  document.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}
