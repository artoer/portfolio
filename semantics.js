document.addEventListener("DOMContentLoaded", function () {
  // Handlebars
  const footerTemplate = Handlebars.compile(`
  <div>
    <span>&copy; Arthur Menken</span>
    <div class="socials">
      <a href="https://www.linkedin.com/in/arthur-menken/" title="LinkedIn" target="_blank">LinkedIn</a>
      •
      <a href="https://dribbble.com/artioer" title="Dribbble" target="_blank">Dribbble</a>
      •
      <a href="./assets/Arthur-Menken_Resume-CV.pdf" title="Resume" target="_blank">Resume</a>
    </div>
  </div>
`);

  const navTemplate = Handlebars.compile(`
    <div>
      <a class="back" href="./"><i class="fa-solid fa-arrow-left fa-xl"></i></a>
    </div>
`);

{/* <a class="logo" href="./">AM</a> */}
  // render the templates with the data
  document.querySelector('footer').innerHTML = footerTemplate();
  document.querySelector('nav').innerHTML = navTemplate();
});

