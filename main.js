// Variable declarations
const mobileNav = document.getElementById('mobile-nav-toggle');
const primaryNav = document.getElementById('primary-navigation');
const form = document.getElementById('form');
const submitBtn = document.getElementById('submit-btn');
const messages = document.querySelectorAll('.message');
const input = document.querySelectorAll("[type='radio']");
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const toggleArrows = document.querySelectorAll('.toggle-arrow');
const totalPriceEl = document.getElementById('price');
const checkoutBtn = document.getElementById('checkout');
const thankYouModal = document.getElementById('thankYouModal');

console.log(submitBtn);

let words = {
  one: '___',
  two: '___',
  three: '___',
  four: '___',
  five: '___',
};

let totalPrice = 0;

// Function declarations
function handleNavClick(e) {
  if (e.currentTarget.getAttribute('aria-expanded') === 'false') {
    e.currentTarget.setAttribute('aria-expanded', 'true');
    primaryNav.setAttribute('data-visible', 'true');
  } else {
    e.currentTarget.setAttribute('aria-expanded', 'false');
    primaryNav.setAttribute('data-visible', 'false');
  }
}

function handleInputChange(e) {
  if (e.target.checked) {
    switch (e.target.parentElement.classList[1]) {
      case 'one':
      case 'two':
      case 'three':
      case 'four':
      case 'five':
        words[e.target.parentElement.classList[1]] = e.target.id;
        break;
    }
  }

  if (document.getElementById('Capsule').checked) {
    messages.forEach((message) => {
      message.innerHTML = `<p>"I drink my coffee as <span>${words.one}</span>, with a <span>${words.two}</span> type of bean. <span>${words.three}</span> , sent to me <span>${words.five}</span>. "</p>`;
    });

    const grindOption = document.querySelector('li[data-option="grind"]');

    document.querySelector('#grind > div').classList.remove('opacity-100');
    document.querySelector('#grind > div').classList.add('opacity-40');

    grindOption.classList.remove('opacity-60');
    grindOption.classList.add('opacity-40');
  } else {
    messages.forEach((message) => {
      message.innerHTML = `<p>"I drink my coffee as <span>${words.one}</span>, with a <span>${words.two}</span> type of bean. <span>${words.three}</span> ground ala <span>${words.four}</span>, sent to me <span>${words.five}</span>. "</p>`;
    });

    const grindOption = document.querySelector('li[data-option="grind"]');

    document.querySelector('#grind > div').classList.remove('opacity-40');
    document.querySelector('#grind > div').classList.add('opacity-100');

    grindOption.classList.remove('opacity-40');
    grindOption.classList.add('opacity-60');
  }

  calculateTotalPrice(e);

  if (e.currentTarget.id !== 'Capsule') {
    // Add the event listener back to the arrow
    toggleArrows.forEach((arrow) => {
      arrow.addEventListener('click', toggleAnswers);
    });
    if (e.currentTarget.id === 'Filter' || e.currentTarget.id === 'Espresso') {
    }
  } else if (e.currentTarget.id === 'Capsule') {
    document
      .getElementById('Wholebean')
      .parentElement.parentElement.classList.remove(('opacity-100', 'h-auto'));
    document
      .getElementById('Wholebean')
      .parentElement.parentElement.classList.add('opacity-0', 'h-0');
    document
      .getElementById('Wholebean')
      .parentElement.parentElement.classList.remove('flex');

    document
      .getElementById('Wholebean')
      .parentElement.parentElement.parentElement.querySelector('.toggle-arrow')
      .classList.remove('rotate');

    messages.forEach((message) => {
      message.innerHTML = `<p>"I drink my coffee using <span>Capsules</span>, with a <span>${words.two}</span> type of bean. <span>${words.three}g</span> ground</span>, sent to me <span>${words.five}</span>. "</p>`;
    });
  }

  checkSubmitBtn();
}

// Check and Enable submit btn
function checkSubmitBtn() {
  const groups = ['drink-coffee', 'type', 'quantity', 'grind', 'delivery'];
  let allSelected = true;

  groups.forEach((group) => {
    if (group === 'grind' && document.getElementById('Capsule').checked) {
      return;
    }
    if (!document.querySelector(`input[name="${group}"]:checked`)) {
      allSelected = false;
    }
  });

  console.log(allSelected);

  if (allSelected) {
    submitBtn.removeAttribute('disabled');
    const li = document.querySelectorAll('.nav-plan li');
    li.forEach((item) => {
      item.classList.remove('opacity-60');
      item.classList.add('opacity-40');
    });
    const delivery = document.querySelector('li[data-option=delivery]');
    delivery.classList.remove('opacity-40');
    delivery.querySelector('span').classList.add('opacity-60');
    const preferences = document.querySelector('li[data-option=preferences]');
    preferences.classList.add('opacity-40');
  }
}

// Calculate total price
function calculateTotalPrice(e) {
  if (document.getElementById('250g').checked) {
    console.log('hello');
    if (document.getElementById('Every week').checked) {
      totalPrice = 7.2 * 4;
      console.log(totalPrice);
    } else if (document.getElementById('Every 2 weeks').checked) {
      totalPrice = 9.6 * 2;
      console.log(totalPrice);
    } else if (document.getElementById('Every Month').checked) {
      totalPrice = 12;
      console.log(totalPrice);
    }
  } else if (document.getElementById('500g').checked) {
    if (document.getElementById('Every week').checked) {
      totalPrice = 13 * 4;
      console.log(totalPrice);
    } else if (document.getElementById('Every 2 weeks').checked) {
      totalPrice = 17.5 * 2;
      console.log(totalPrice);
    } else if (document.getElementById('Every Month').checked) {
      totalPrice = 22;
      console.log(totalPrice);
    }
  } else if (document.getElementById('1000g')) {
    if (document.getElementById('Every week').checked) {
      totalPrice = 22 * 4;
      console.log(totalPrice);
    } else if (document.getElementById('Every 2 weeks').checked) {
      totalPrice = 32 * 2;
      console.log(totalPrice);
    } else if (document.getElementById('Every Month').checked) {
      totalPrice = 42;
      console.log(totalPrice);
    }
  }
}

// Handle Submit
function handleSubmit(e) {
  e.preventDefault();
  const groups = ['drink-coffee', 'type', 'quantity', 'grind', 'delivery'];

  for (let group of groups) {
    if (group === 'grind' && document.getElementById('Capsule').checked) {
      continue;
    }
    if (!document.querySelector(`input[name="${group}"]:checked`)) {
      e.preventDefault();
      return;
    }
  }
  // use for of loop to exit loop and the function not possible with for each!

  totalPriceEl.textContent = `$${Number(totalPrice).toFixed(2)} / mo`;
  console.log(totalPriceEl);
  console.log(totalPrice);
  console.log(submitBtn);
  submitBtn.removeAttribute('disabled');
  modal.style.display = 'block';
  overlay.style.display = 'block';
}

function toggleAnswers(e) {
  console.log(e.currentTarget);
  e.currentTarget.classList.toggle('rotate');

  let formControl = e.target.closest('.flex').nextElementSibling;
  if (formControl.classList.contains('opacity-0')) {
    formControl.classList.remove('opacity-0', 'h-0');
    formControl.classList.add('opacity-100', 'h-auto');
    formControl.classList.add('flex');

    if (window.innerWidth >= 768) {
      e.currentTarget.parentElement.style.marginBottom = '2.5rem';
    } else {
      e.currentTarget.parentElement.style.marginBottom = '2rem';
    }
  } else {
    formControl.classList.remove('opacity-100', 'h-auto');
    formControl.classList.add('opacity-0', 'h-0');
    formControl.classList.remove('flex');
    e.currentTarget.parentElement.style.marginBottom = '0rem';
  }
}

function checkAnswers(e) {
  const capsule = document.getElementById('Capsule');

  console.log(capsule.checked);
  if (capsule.checked) {
    document
      .getElementById('Wholebean')
      .parentElement.parentElement.parentElement.querySelector('.toggle-arrow')
      .removeEventListener('click', toggleAnswers);
  } else {
    e.currentTarget.addEventListener('click', toggleAnswers);
  }
}

function handleCheckout(e) {
  thankYouModal.style.display = 'block';
  modal.style.display = 'none';
}

// Add Eventlistener
mobileNav.addEventListener('click', handleNavClick);
input.forEach((input) => {
  input.addEventListener('change', handleInputChange);
});
form.addEventListener('submit', handleSubmit);
toggleArrows.forEach((arrow) => {
  arrow.addEventListener('click', checkAnswers);
  arrow.addEventListener('click', toggleAnswers);
});
checkoutBtn.addEventListener('click', handleCheckout);
