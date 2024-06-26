document.addEventListener("DOMContentLoaded", function () {
  // Handlebars
  const footerTemplate = Handlebars.compile(`
  <div>
    <span>&copy; 2024 Arthur Menken</span>
    <a href="https://www.linkedin.com/in/arthur-menken/" title="LinkedIn" target="_blank"><i class="fa-brands fa-linkedin-in fa-xl"></i></a>
    <a href="https://dribbble.com/artioer" title="Dribbble" target="_blank"><i class="fa-brands fa-dribbble fa-xl"></i></a>
    <a href="mailto:arthur_menken@hotmail.com" title="Email"><i class="fa-regular fa-paper-plane fa-xl"></i></a>
    <a href="./assets/Arthur-Menken_Resume-CV.pdf" title="Resume" target="_blank"><i class="fa-regular fa-file-pdf fa-xl"></i></a>
  </div>
`);

  const navTemplate = Handlebars.compile(`
    <ul>
      <li><a href="./">AM</a></li>
      <li><a href="./#work">Work</a></li>
      <li><a href="./about.html">About</a></li>
      <li><a href="./assets/Arthur-Menken_Resume-CV.pdf" target="_blank">Resume</a></li>
    </ul>
`);

  // render the templates with the data
  document.querySelector('footer').innerHTML = footerTemplate();
  document.querySelector('nav').innerHTML = navTemplate();
});

