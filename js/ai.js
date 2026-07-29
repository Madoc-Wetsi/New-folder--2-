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

const schoolInfo = `
Ho Technical University (HTU) is one of Ghana's leading technical universities, located in Ho, Volta Region.
It offers Higher National Diplomas (HND), Bachelor of Technology (BTech), and other professional programs.
HTU has faculties in Applied Science and Technology, Engineering, Business and Management Studies, and Built Environment.
The university provides academic support, modern library facilities, hostels, health services, and opportunities for internships and industrial attachments.
Students can also join associations like SRC, NUGS, and departmental clubs.
For admissions, visit the HTU Admission Office or check the official website for requirements and deadlines.
`;

const programs = [
  'HND COMPUTER SCIENCE',
  'HND ICT',
  'BTECH COMPUTER SCIENCE',
  'BTECH ICT',
  'HND ACCOUNTING',
  'HND MARKETING',
  'BTECH ELECTRICAL ENGINEERING',
  'BTECH MECHANICAL ENGINEERING',
  'HND HOSPITALITY AND TOURISM',
  'BTECH BUILDING TECHNOLOGY'
];

const faculty = [
  'FACULTY OF APPLIED SCIENCE AND TECHNOLOGY',
  'FACULTY OF ENGINEERING',
  'FACULTY OF BUSINESS AND MANAGEMENT STUDIES',
  'FACULTY OF BUILT ENVIRONMENT'
];

const department = [
  'COMPUTER SCIENCE',
  'ELECTRICAL/ELECTRONICS ENGINEERING',
  'MECHANICAL ENGINEERING',
  'ACCOUNTING AND FINANCE',
  'MARKETING',
  'HOSPITALITY AND TOURISM',
  'BUILDING TECHNOLOGY'
];

const services = [
  'ACADEMIC SUPPORT',
  'ADMISSION GUIDANCE',
  'COURSE INFORMATION',
  'STUDENT SERVICE',
  'LIBRARY SERVICES',
  'HOSTEL ACCOMMODATION',
  'CAREER COUNSELLING',
  'HEALTH SERVICES',
  'SCHOLARSHIPS & FINANCIAL AID',
  'SPORTS & RECREATION'
];

const campuses = [
  'MAIN CAMPUS - HO',
  'ANNEX CAMPUS - HO',
  'DISTANCE LEARNING CENTERS'
];

const associations = [
  'SRC (Student Representative Council)',
  'NUGS (National Union of Ghana Students)',
  'Departmental Associations',
  'Clubs and Societies'
];

const opportunities = [
  'Industrial Attachments & Internships',
  'International Exchange Programs',
  'Alumni Mentorship & Networking'
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
    reply = 'Hi, welcome to Ho Technical University! How can I assist you today?';
  } else if (message.toLowerCase().includes('program') || message.toLowerCase().includes('course')) {
    reply = schoolInfo + '\n\nPrograms Offered:\n' + programs.join(',\n');
  } else if (message.toLowerCase().includes('department')) {
    reply = department.join(',\n');
  } else if (message.toLowerCase().includes('service')) {
    reply = services.join(',\n');
  } else if (message.toLowerCase().includes('faculty') || message.toLowerCase().includes('faculties')) {
    reply = faculty.join(',\n');
  } else if (message.toLowerCase().includes('campus')) {
    reply = campuses.join(',\n');
  } else if (message.toLowerCase().includes('association') || message.toLowerCase().includes('club')) {
    reply = associations.join(',\n');
  } else if (message.toLowerCase().includes('opportunit')) {
    reply = opportunities.join(',\n');
  } else if (message.toLowerCase().includes('admission')) {
    reply = 'For admission guidance, visit the HTU Admission Office or check the official website for requirements, deadlines, and fees.';
  } else if (message.toLowerCase().includes('hostel') || message.toLowerCase().includes('accommodation')) {
    reply = 'HTU provides on-campus hostels and private accommodation options. Contact the Hostel Office for allocation and fees.';
  } else if (message.toLowerCase().includes('library')) {
    reply = 'The HTU Library offers study spaces, e-resources, and ICT services. Students can access materials with their ID cards.';
  } else if (message.toLowerCase().includes('health')) {
    reply = 'HTU has a campus clinic and partnerships with hospitals for student healthcare services.';
  } else if (message.toLowerCase().includes('scholarship') || message.toLowerCase().includes('financial aid')) {
    reply = 'Scholarships and bursaries are available. Visit the Financial Aid Office for eligibility and application details.';
  } else if (message.toLowerCase().includes('sport') || message.toLowerCase().includes('recreation')) {
    reply = 'HTU has facilities for football, basketball, athletics, and cultural events. Join the Sports Directorate for more info.';
  } else if (message.toLowerCase() === 'help') {
    reply = 'You can ask about programs, departments, faculties, services, campuses, associations, admission, hostels, library, health, scholarships, sports, or opportunities.';
  } else {
    reply = "Sorry, I don't understand. Try asking about programs, faculties, services, or admission.";
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

createMessage('Welcome to student support! How can I be of your service', 'bot');

