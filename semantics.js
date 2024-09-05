document.addEventListener("DOMContentLoaded", function () {
  // Handlebars
  const footerTemplate = Handlebars.compile(`
  <div>
    <span>&copy; 2024 Arthur Menken</span>
    <a href="https://www.linkedin.com/in/arthur-menken/" title="LinkedIn" target="_blank">LinkedIn</a>
    •
    <a href="https://dribbble.com/artioer" title="Dribbble" target="_blank">Dribbble</a>
    •
    <a href="mailto:arthur_menken@hotmail.com" title="Email">Email</a>
    •
    <a href="./assets/Arthur-Menken_Resume-CV.pdf" title="Resume" target="_blank">Resume</a>
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

