
const dateElement = document.querySelector('#dynamic-date'); 

const currentDate = new Date();


const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);


dateElement.textContent = formattedDate;