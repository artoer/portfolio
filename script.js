window.addEventListener("DOMContentLoaded", (event) => {

  console.log('Hand-coded by Arthur Menken :)')

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
  closeBtn.innerHTML = '<i class="fa-solid fa-xmark fa-xl"></i>';
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  const modalContainer = document.createElement('div');
  modalContainer.classList = 'modal-container';
  modal.appendChild(modalContainer);

  const modalImgContainer = document.createElement('div');
  modalImgContainer.classList = 'modal-img-container';
  modalContainer.appendChild(modalImgContainer);

  modalImgContainer.appendChild(modalImg);
  modalImgContainer.appendChild(closeBtn);

  // Append modal to document body
  document.body.appendChild(modal);

  // Add event listeners to images
  const images = document.querySelectorAll('.process img, .solution img, .fs-container.heading img');
  images.forEach((img) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', (event) => {
      event.stopPropagation();
      modal.style.display = 'flex';
      modalImg.src = img.src;
    });
  });

  // Add event listener to modal that closes the modal if clicked outside of the image
  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.parentNode === modal) {
      modal.style.display = 'none';
    }
  });
});