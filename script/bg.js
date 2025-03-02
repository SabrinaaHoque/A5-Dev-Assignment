
const colorButton = document.querySelector('#color-button'); 
const body = document.body;

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange','pink','deepskyblue'];
let colorIndex = 0;


colorButton.addEventListener('click', () => {
  
  colorIndex = (colorIndex + 1) % colors.length;
  const selectedColor = colors[colorIndex];


  body.style.backgroundColor = selectedColor;
});