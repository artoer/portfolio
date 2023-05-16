document.addEventListener("DOMContentLoaded", function () {
  // Handlebars
  const footerTemplate = Handlebars.compile(`
  <div>
  <a href="https://www.linkedin.com/in/arthur-menken/" target="_blank"><i class="fa-brands fa-linkedin-in fa-2xl"></i></a>
  <a href="https://dribbble.com/artioer" target="_blank"><i class="fa-brands fa-dribbble fa-2xl"></i></a>
  <a href="mailto:arthur_menken@hotmail.com"><i class="fa-regular fa-at fa-2xl"></i></a>
  </div>
    &copy; {{currentYear}}
`);

  const navTemplate = Handlebars.compile(`
    <ul>
      <li><a href="./">Arthur</a></li>
      <li><a href="./#work">Work</a></li>
      <li><a href="./about.html">About</a></li>
      <li><a href="./assets/Arthur-Menken_Resume-CV_2023.pdf" target="_blank">Resume</a></li>
    </ul>
`);

  // define the data
  var footerData = {
    currentYear: new Date().getFullYear(),
  };

  // render the templates with the data
  document.querySelector('footer').innerHTML = footerTemplate(footerData);
  document.querySelector('nav').innerHTML = navTemplate();
});