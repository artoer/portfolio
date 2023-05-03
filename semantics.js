document.addEventListener("DOMContentLoaded", function () {
  // Handlebars
  const footerTemplate = Handlebars.compile(`
    <a href="https://www.linkedin.com/in/arthur-menken/">Connect on LinkedIn</a>
    &copy; Copyright {{currentYear}} — Arthur Menken
`);

  const navTemplate = Handlebars.compile(`
    <ul>
      <li><a href="./index.html">Arthur</a></li>
      <li><a href="./assets/Arthur-Menken_Resume-CV_2023.pdf" target="_blank">Resume</a></li>
      <li><a href="./about.html">About</a></li>
      <div class="toggle-container">
        <label class="switch">
        <input type="checkbox" id="toggle-switch" aria-label="Toggle dark mode">
        <span class="slider"></span>
      </label>
    </div>
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