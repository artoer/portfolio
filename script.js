// Create modal element
const modal = document.createElement('div');
modal.id = 'modal';
modal.classList.add('modal');
const modalImg = document.createElement('img');
modalImg.id = 'modal-img';
modalImg.classList.add('modal-img');
const closeBtn = document.createElement('span');
closeBtn.id = 'close-btn';
closeBtn.classList.add('close-btn');
closeBtn.innerHTML = '&times;';
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
modal.appendChild(closeBtn);
modal.appendChild(modalImg);

// Append modal to document body
document.body.appendChild(modal);

// Add event listeners to images
const images = document.querySelectorAll('img');
images.forEach((img) => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});

// get the current page URL path
const path = window.location.pathname;

// select all navigation links
const navLinks = document.querySelectorAll('nav a');

// loop through each link and check if its href matches the current path
navLinks.forEach(link => {
  if (link.getAttribute('href') === path) {
    // add the active class if the link matches the current path
    link.classList.add('active');
  } else {
    // remove the active class if the link doesn't match the current path
    link.classList.remove('active');
  }
});
