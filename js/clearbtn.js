const newbtn = document.querySelector('.newbtn');

newbtn.addEventListener('click', () => {
 displayArea.textContent = " ";

 createMessage('Welcome! How can i be of your service', 'bot');
});


const editbtn = document.querySelector('#edit');

editbtn.addEventListener('click', () => {
 displayArea.textContent = " ";

 createMessage('Welcome! How can i be of your service', 'bot');
});
