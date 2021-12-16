let button = document.querySelector('#button');
let body = document.querySelector('body');
let text = document.querySelector('span');

button.addEventListener('click', () => {  
  let r = Math.ceil(Math.random() * 255);                   // 0-255 arasi sayi uretir
  let g = Math.ceil(Math.random() * 255);
  let b = Math.ceil(Math.random() * 255);

  let r2 = Math.ceil(Math.random() * 255).toString(16);     // HEX cinsinden sayi uretir
  let g2 = Math.ceil(Math.random() * 255).toString(16);
  let b2 = Math.ceil(Math.random() * 255).toString(16);
  
  let number = Math.floor(Math.random() * 2);               // 0 veya 1 uretir

  let rgb = `rgb(${r}, ${g}, ${b})`;
  let hex = `#${r2}${g2}${b2}`;

  if (number == 0) {                                        // "0" gelirse
    if (r == 0 && g == 0 && b == 0) {
      text.innerText = 'Black';
      body.style.backgroundColor = rgb;
    } else if (r == 255 && g == 255 && b == 255) {
      text.innerText = 'White';
      body.style.backgroundColor = rgb;
    } else if (r == 255 && g == 0 && b == 0) {
      text.innerText = 'Red';
      body.style.backgroundColor = rgb;
    } else if (r == 0 && g == 255 && b == 0) {
      text.innerText = 'Lime';
      body.style.backgroundColor = rgb;
    } else if (r == 0 && g == 0 && b == 255) {
      text.innerText = 'Blue';
      body.style.backgroundColor = rgb;
    } else if (r == 255 && g == 255 && b == 0) {
      text.innerText = 'Yellow';
      body.style.backgroundColor = rgb;
    } else if (r == 0 && g == 255 && b == 255) {
      text.innerText = 'Cyan';
      body.style.backgroundColor = rgb;
    } else if (r == 0 && g == 0 && b == 128) {
      text.innerText = 'Navy';
      body.style.backgroundColor = rgb;
    } else if (r == 255 && g == 0 && b == 255) {
      text.innerText = 'Fuchsia';
      body.style.backgroundColor = rgb;
    } else if (r == 192 && g == 192 && b == 192) {
      text.innerText = 'Silver';
      body.style.backgroundColor = rgb;
    } else if (r == 128 && g == 128 && b == 128) {
      text.innerText = 'Gray';
      body.style.backgroundColor = rgb;
    } else if (r == 128 && g == 0 && b == 0) {
      text.innerText = 'Maroon';
      body.style.backgroundColor = rgb;
    } else if (r == 128 && g == 128 && b == 0) {
      text.innerText = 'Olive';
      body.style.backgroundColor = rgb;
    } else if (r == 0 && g == 128 && b == 0) {
      text.innerText = 'Green';
      body.style.backgroundColor = rgb;
    } else if (r == 128 && g == 0 && b == 128) {
      text.innerText = 'Purple';
      body.style.backgroundColor = rgb;
    } else if (r == 0 && g == 128 && b == 128) {
      text.innerText = 'Teal';
      body.style.backgroundColor = rgb;
    } else {
      text.innerText = rgb;
      body.style.backgroundColor = text.innerText;
    }
  } else {
    text.innerText = hex;
    body.style.backgroundColor = text.innerText;
  }
});
