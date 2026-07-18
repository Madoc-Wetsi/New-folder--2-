const searchbtn = document.getElementById('send');
const displayArea = document.querySelector('.displayArea');

function createMessage(message, sender) {
  const messagebox = document.createElement('div');
  messagebox.textContent = message;

  if (sender === 'user') {
    messagebox.classList.add('user-message');
  } else {
    messagebox.classList.add('bot-message');
  }

  displayArea.appendChild(messagebox);
  displayArea.scrollTop = displayArea.scrollHeight;
}

const programs = [
  'HND COMPUTER SCIENCE',
  'HND ICT',
  'BTECH COMPUTER SCIENCE',
  'BTECH ICT'
];

const faculty = [
  'FACULTY OF APPLIED SCIENCE AND TECH',
  'FACULTY OF ENGINEERING',
  '',
  'BTECH ICT'
];

const department = [
  'COMPUTER SCIENCE',
  'ELECTRICAL/ELECTRONICS ENGINEERING',
  'MECHANICAL ENGINEERING',
  'ACCOUNTING AND FINANCE',
  'MARKETING'
];

const services = [
  'ACADEMIC SUPPORT',
  'ADMISSION GUIDANCE',
  'COURSE INFORMATION',
  'STUDENT SERVICE'
];

function sendMessage() {
  const input = document.querySelector('input');
  const message = input.value;

  if (message.trim() === '') {
    return;
  }

  createMessage(message, 'user');
  input.value = '';

  let reply;

  if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
    reply = 'Hi, how can i help you?';
  } else if (message.toLowerCase().includes('program') || message.toLowerCase().includes('course')) {
    reply = programs.join('\n');
  } else if (message.toLowerCase().includes('department')) {
    reply = department.join('\n');
  } else if (message.toLowerCase().includes('service')) {
    reply = services.join('\n');
  } else if (message.toLowerCase().includes('faculty')) {
    reply = faculty.join('\n');
  } else if (message.toLowerCase() === 'help') {
    reply = 'You can ask about programs, departments, services, admission, or general student support.';
  } else {
    reply = "sorry, i don't understand.";
  }

  const typing = document.createElement('div');
  typing.textContent = 'typing...';
  typing.classList.add('typing');
  displayArea.appendChild(typing);

  setTimeout(() => {
    typing.remove();
    createMessage(reply, 'bot');
  }, 1000);
}

searchbtn.addEventListener('click', sendMessage);

const input = document.querySelector('input');
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

const newbtn = document.querySelector('.newbtn');

newbtn.addEventListener('click', () => {
 displayArea.textContent = " ";

 createMessage('Welcome! How can i be of your service', 'bot');
});

createMessage('Welcome! How can i be of your service', 'bot');

