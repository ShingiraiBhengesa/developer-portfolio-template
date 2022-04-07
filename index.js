const menuBtn = document.querySelector('.menu-btn');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const btnCloseNav = document.querySelector('.btn-close-nav');
const linkPortfolio = document.querySelector('.link-portfolio');
const linkAbout = document.querySelector('.link-about');
const linkContact = document.querySelector('.link-contact');
const recentWorksListItem = document.querySelector('#recent-works li');
const recentWorksContainer = document.querySelector('#recent-works');
const popup = document.querySelector('#popup');
const closePopupBtns = popup.querySelectorAll('#popup .close-popup, #popup .close-popup-desktop');
const contactForm = document.forms['contact-form'];
const errorContainer = document.getElementById('form-error');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  errorContainer.classList.add('hidden');
  errorContainer.textContent = '';

  Array.from(contactForm.elements).forEach((element) => {
    element.classList.remove('invalid');
    if (!element.validity.valid) {
      if (element.validity.valueMissing) {
        errorContainer.textContent = `The field ${element.name} is required.`;
      } else if (element.validity.typeMismatch) {
        errorContainer.textContent = 'Please provide a valid e-mail address.';
      } else if (element.validity.patternMismatch) {
        errorContainer.textContent = 'Please provide email only in lowercase.';
      } else if (element.validity.tooLong) {
        errorContainer.textContent = `The field ${element.name} exceeded the max character count (${element.getAttribute('maxlength')}).`;
      }
      errorContainer.classList.remove('hidden');
      element.classList.add('invalid');
    }
  });

  if (contactForm.reportValidity()) {
    contactForm.submit();
  }
}); 
menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('hidden');
  headerNavMobile.classList.remove('hidden');
});

btnCloseNav.addEventListener('click', () => {
  menuBtn.classList.remove('hidden');
  headerNavMobile.classList.add('hidden');
});

linkPortfolio.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

linkAbout.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

linkContact.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

const RECENT_WORKS = [
  {
    title: 'Multi-Post Stories Gain+Glory',
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_img: './assets/project2.svg',
    desktop_featured_img: './assets/project.svg',
    technologies: [
      'Ruby',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    live: '#',
    source: '#',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_img: './assets/project2.svg',
    desktop_featured_img: './assets/project.svg',
    technologies: [
      'Ruby',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    live: '#',
    source: '#',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_img: './assets/project2.svg',
    desktop_featured_img: './assets/project.svg',
    technologies: [
      'Ruby',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    live: '#',
    source: '#',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_img: './assets/project2.svg',
    desktop_featured_img: './assets/project.svg',
    technologies: [
      'Ruby',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    live: '#',
    source: '#',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_img: './assets/project2.svg',
    desktop_featured_img: './assets/project.svg',
    technologies: [
      'Ruby',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    live: '#',
    source: '#',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_img: './assets/project2.svg',
    desktop_featured_img: './assets/project.svg',
    technologies: [
      'Ruby',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    live: '#',
    source: '#',
  },
];

for (let i = 0; i < RECENT_WORKS.length; i += 1) {
  const card = recentWorksListItem.cloneNode(true);
  const title = card.querySelector('h3.card-title');
  const button = card.querySelector('button');
  const categories = card.querySelector('ul.card-categories');

  title.innerHTML = RECENT_WORKS[i].title;
  button.setAttribute('id', `seeProjectButton-${i}`);
  for (let j = 0; j < RECENT_WORKS[i].technologies.length; j += 1) {
    const item = document.createElement('li');
    item.innerHTML = RECENT_WORKS[i].technologies[j];
    categories.append(item);
  }

  recentWorksListItem.after(card);
}

recentWorksListItem.remove();

recentWorksContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('primary-btn')) {
    const project = event.target.id.split('-');
    const popupTitle = popup.querySelector('.popup-title');
    const popupDescription = popup.querySelector('#popup p');
    const popupImg = popup.querySelector('#featured_img');
    const popupImgDesktop = popup.querySelector('#popup picture > source');
    const popupTechnologies = popup.querySelector('#popup ul');
    popupTechnologies.innerHTML = '';
    RECENT_WORKS[project[1]].technologies.forEach((technology) => {
      const techItem = document.createElement('li');
      techItem.innerHTML = technology;
      popupTechnologies.prepend(techItem);
    });

    popupImgDesktop.setAttribute('srcset', RECENT_WORKS[project[1]].desktop_featured_img);
    popupImg.setAttribute('src', RECENT_WORKS[project[1]].featured_img);
    popupImg.setAttribute('alt', RECENT_WORKS[project[1]].title);
    popupDescription.innerHTML = RECENT_WORKS[project[1]].description;
    popupTitle.innerHTML = RECENT_WORKS[project[1]].title;
    popup.classList.toggle('popup-hidden');
  }
});

closePopupBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    popup.classList.toggle('popup-hidden');
  });
});
