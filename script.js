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
});


if (document.getElementById("typing-text")) {
  const skills = [
    "designing",
    "researching",
    "prototyping",
    "testing",
    "optimizing",
    "collaborating on"
  ];
  let currentSkillIndex = 0;

  function typeSentence() {
    const typingText = document.getElementById("typing-text");
    const currentSkill = skills[currentSkillIndex];
    const typingDelay = 100; // Delay between each character typing
    const erasingDelay = 80; // Delay between removing each character

    // Typing effect
    for (let i = 0; i <= currentSkill.length; i++) {
      setTimeout(() => {
        typingText.textContent = currentSkill.slice(0, i);
      }, i * typingDelay);
    }

    // Wait before erasing the text and moving to the next skill
    setTimeout(() => {
      // Erase the text
      for (let i = currentSkill.length; i >= 0; i--) {
        setTimeout(() => {
          typingText.textContent = currentSkill.slice(0, i);
        }, (currentSkill.length - i) * erasingDelay);
      }

      // Move to the next skill
      currentSkillIndex = (currentSkillIndex + 1) % skills.length;
      setTimeout(typeSentence, currentSkill.length * erasingDelay);
    }, currentSkill.length * typingDelay + 2000); // Delay before moving to the next skill
  }

  // Start the typing animation when the page loads
  window.addEventListener("load", typeSentence);
}