window.addEventListener("DOMContentLoaded", (event) => {

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
const openInNewTabLink = document.createElement('a');
openInNewTabLink.id = 'open-in-new-tab';
openInNewTabLink.classList.add('open-in-new-tab');
openInNewTabLink.target = '_blank';
openInNewTabLink.innerHTML = 'Open in New Tab';
openInNewTabLink.addEventListener('click', () => {
    event.stopPropagation();
});
modal.appendChild(closeBtn);
modal.appendChild(modalImg);
modal.appendChild(openInNewTabLink);

// Append modal to document body
document.body.appendChild(modal);

// Add event listeners to images
const images = document.querySelectorAll('#content img');
images.forEach((img) => {
    img.addEventListener('click', (event) => {
        event.stopPropagation();
        modal.style.display = 'flex';
        modalImg.src = img.src;
        openInNewTabLink.href = img.src;
    });

    // create figure element
    const figure = document.createElement('figure');
    // insert figure before img
    img.before(figure);
    // move img inside figure
    figure.appendChild(img);

    if (img.classList == 'float') {
        figure.classList = 'float';
    }

    if (img.getAttribute('alt') != '') {
        // create figcaption element
        const figcaption = document.createElement('figcaption');
        // get alt attribute from img and set as text content of figcaption
        figcaption.textContent = img.getAttribute('alt');
        // insert figcaption after img
        img.after(figcaption);
    }
});

// Add event listener to modal that closes the modal if clicked outside of the image
modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.parentNode === modal) {
        modal.style.display = 'none';
    }
});

const toggleSwitch = document.querySelector('#toggle-switch');

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }    
}

toggleSwitch.addEventListener('change', switchTheme);

let currentTheme = localStorage.getItem('theme');
if (!currentTheme) {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
} else {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}
});