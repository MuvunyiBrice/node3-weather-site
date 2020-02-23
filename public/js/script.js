const weatherForm = document.querySelector('form');
const searchValue = document.querySelector('input');
const messageOne = document.querySelector('#message-one');
const messageTwo = document.querySelector('#message-two');

weatherForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const location = searchValue.value;
    messageOne.textContent = 'Loading weather info...';
    messageTwo.textContent = '';
    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        });
    });
});