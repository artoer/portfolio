document.addEventListener("DOMContentLoaded", function () {
  // Handlebars
  const footerTemplate = Handlebars.compile(`
    &copy; Copyright {{currentYear}} — Arthur Menken
    <a href="https://www.linkedin.com/in/arthur-menken/">LinkedIn</a>
`);

  const navTemplate = Handlebars.compile(`
    <ul>
      <li><a href="./index.html">Arthur</a></li>
      <li><a href="./index.html">Portfolio</a></li>
      <li><a href="./docs/cv/AMenken-resume-english-2022.pdf" target="_blank">Resume</a></li>
      <li><a href="./about.html">About</a></li>
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