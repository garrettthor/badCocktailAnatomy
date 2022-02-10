
// Define clickable links for smooth scoll.

const hand = document.querySelector('#hand');
const drinks = document.querySelector('#drinks-scroll-to');
const contact = document.querySelector('#contact-scroll-to');
const why = document.querySelector('#why-scroll-to');
const home = document.querySelector('#logo');

// Define eventListeners and functions for scrolling to different sections.

hand.addEventListener('click', scrollToFeed);
drinks.addEventListener('click', scrollToFeed);

function scrollToFeed() {
  document.querySelector('#post-feed').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

contact.addEventListener('click', scrollToContact);

function scrollToContact() {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

why.addEventListener('click', scrollToWhy);

function scrollToWhy() {
    document.querySelector('#why').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

home.addEventListener('click', scrollToHome);

function scrollToHome() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
        block: 'start'
    });
}