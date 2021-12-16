let clickMe = document.querySelector('#button');
let output = document.querySelector('#text');
let body = document.querySelector('body');
let navRgb = document.querySelector('#rgb');
let navHex = document.querySelector('#hex');

clickMe.addEventListener('click', e => {
  if (document.title == 'Color Flipper') {                  // Burada aslinda Kullanici bir secenek secmeden "Click Me" butonuna basarsa uyari verdiriyoruz
    alert('Please select one of the color methods above! \nRGB or HEX???');
  }
});

navRgb.addEventListener('click', e => {
  document.title = 'Color Flipper || Rgb';
  clickMe.addEventListener('click', e => {
    const randomNumber = () => Math.round(Math.random() * 255);                                   // Producing random number
    const randomColor = () => `Rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;     // Producing random color
    body.style.backgroundColor = randomColor();
    output.innerHTML = `Background Color : <span style="color: dodgerblue">${randomColor()}</span>`;
    output.style.visibility = 'visible';
  });
});

navHex.addEventListener('click', e => {
  document.title = 'Color Flipper || Hex';
  clickMe.addEventListener('click', e => {
    const hexNumber = () => Math.round(Math.random() * 16).toString(16);
    const hexColor = () => `#${hexNumber()}${hexNumber()}${hexNumber()}${hexNumber()}${hexNumber()}${hexNumber()}`;
    body.style.backgroundColor = hexColor();
    output.innerHTML = `Background Color : <span style="color: dodgerblue">${hexColor()}</span>`;
    output.style.visibility = 'visible';
  });
});
