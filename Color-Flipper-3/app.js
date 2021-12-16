const color = document.querySelector('.color');
const button = document.querySelector('.btn');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let count = 0;

function getHexRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}


const generateRGB = () => {
  const r = Math.floor(Math.random() * 256);        // Producing RGB value
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

button.addEventListener('click', () => {
  console.log(Math.floor(Math.random() * hex.length));
  if (count % 2 !== 0) {
    let hexValue = '#';
    let hexButton = '#';

    for (let i = 0; i < 6; i++) {
      hexValue += hex[getHexRandomNumber()];        // Producing hex value for body
      hexButton += hex[getHexRandomNumber()];       // Producing hex value for button
    }

    document.body.style.background = hexValue;
    color.innerText = hexValue;
    button.style.background = hexButton;
    count++;
  } else {
    document.body.style.background = generateRGB();   
    color.innerText = generateRGB();
    button.style.background = generateRGB();
    count++;
  }
});
