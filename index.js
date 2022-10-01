const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
  const btn = question.querySelector('.question-btn');
  // console.log(btn);

  btn.addEventListener('click', function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });

    question.classList.toggle('show-text');
  });
});

import data from './data.js';
const container = document.querySelector('.slide-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
// if length is 1 hide buttons
if (data.length === 1) {
  nextBtn.style.display = 'none';
  prevBtn.style.display = 'none';
}
// if length is 2, add copies of slides
let people = [...data];
if (data.length === 2) {
  people = [...data, ...data];
}
container.innerHTML = people
  .map((person, slideIndex) => {
    const { img, name, job, text } = person;
    let position = 'next';
    if (slideIndex === 0) {
      position = 'active';
    }
    if (slideIndex === people.length - 1) {
      position = 'last';
    }
    if (data.length <= 1) {
      position = 'active';
    }
    return `<article class="slide ${position}">
  <img src=${img} class="slider-img" alt="${name}"/>
  <h4 class="class-name">${name}</h4>
  
  <p class="slide-text">
   ${text}
  </p>

 </article>`;
  })
  .join('');

const startSlider = (type) => {
  // get all three slides active,last next
  const active = document.querySelector('.active');
  const last = document.querySelector('.last');
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
  }
  active.classList.remove('active');
  last.classList.remove('last');
  next.classList.remove('next');

  if (type === 'prev') {
    active.classList.add('next');
    last.classList.add('active');
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove('next');
    next.classList.add('last');
    return;
  }
  active.classList.add('last');
  last.classList.add('next');
  next.classList.add('active');
};
nextBtn.addEventListener('click', () => {
  startSlider();
});
prevBtn.addEventListener('click', () => {
  startSlider('prev');
});

//scroll function

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 678) {
    $('.nav').css('background', 'black');
  } else {
    $('.nav').css('background', 'none');
  }
});

//modal function

const modalBtn = document.getElementsByClassName('milestone-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

for (var i = 0; i < modalBtn.length; i++) {
  modalBtn[i].addEventListener('click', function () {
    modal.classList.add(`open-modal-${i}`);
  });
}

// modalBtn.addEventListener('click', function () {
//   modal.classList.add('open-modal');
// });
closeBtn.addEventListener('click', function () {
  modal.classList.remove('open-modal');
});
