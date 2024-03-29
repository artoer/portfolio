window.addEventListener("DOMContentLoaded", (event) => {

  // Create modal element
  const modal = document.createElement('div');
  modal.id = 'modal';
  modal.classList.add('modal');
  const modalImg = document.createElement('img');
  modalImg.id = 'modal-img';
  modalImg.classList.add('modal-img');
  modalImg.addEventListener('click', () => {
    window.open(modalImg.src, '_blank');
  });
  const closeBtn = document.createElement('span');
  closeBtn.id = 'close-btn';
  closeBtn.title = 'Close'
  closeBtn.classList.add('close-btn');
  closeBtn.innerHTML = '<i class="fa-solid fa-xmark fa-2xl"></i>';
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  const openInNewTabLink = document.createElement('a');
  openInNewTabLink.id = 'open-in-new-tab';
  openInNewTabLink.classList.add('open-in-new-tab');
  openInNewTabLink.target = '_blank';
  openInNewTabLink.title = "Open in New Tab"
  openInNewTabLink.innerHTML = '<i class="fa-solid fa-expand fa-xl"></i>';
  openInNewTabLink.addEventListener('click', () => {
    event.stopPropagation();
  });
  const modalContainer = document.createElement('div');
  modalContainer.classList = 'modal-container';
  modal.appendChild(modalContainer);

  const modalImgContainer = document.createElement('div');
  modalImgContainer.classList = 'modal-img-container';
  modalContainer.appendChild(modalImgContainer);

  modalImgContainer.appendChild(modalImg);
  modalImgContainer.appendChild(closeBtn);
  modalImgContainer.appendChild(openInNewTabLink);

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
  });

  // Add event listener to modal that closes the modal if clicked outside of the image
  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.parentNode === modal) {
      modal.style.display = 'none';
    }
  });

  // Function to update --card-height property
  if (document.querySelector('.card img')) {
    function updateCardHeight() {
      // Get the first .card element
      const firstCard = document.querySelector('.card');

      // Measure the height of the first .card element
      const cardHeight = firstCard.clientHeight;

      // Apply the height to the CSS custom property --card-height
      const heroContainer = document.getElementById('hero-container');
      heroContainer.style.setProperty('--card-height', cardHeight + 'px');
    };

    // Add event listener for window resize
    window.addEventListener('resize', updateCardHeight);


    // Call the function initially
    updateCardHeight();
  }
});