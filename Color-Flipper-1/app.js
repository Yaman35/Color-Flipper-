const body = document.querySelector('body');
const span = document.querySelector('span');
const button = document.querySelector('a');

const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025', 'rgba(185,100,245)', '#f08015'];


function randomOrder() {
  return Math.floor(Math.random() * colors.length);
}

button.addEventListener('click', function () {
  let random = randomOrder();
  span.innerText = colors[random];
  body.style.backgroundColor = colors[random];
});





