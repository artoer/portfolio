document.addEventListener("DOMContentLoaded", function () {
  // Handlebars
  const footerTemplate = Handlebars.compile(`
    &copy; Copyright {{currentYear}} - Arthur Menken
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

  const headTemplate = Handlebars.compile(`
  <head>
  <link rel="stylesheet" type="text/css" href="style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;600;700&family=Orbitron&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfolio van Arthur Menken, UX Designer.">
    <meta name="author" content="Arthur Menken">
    <meta property="og:image" content="./img/logo.png">
    <meta name="theme-color" content="#5558D8">
    <meta name="robots" content="noindex,nofollow"/>
    <link rel="icon" type="image/png" href="../img/favicon.png"/>
    <title>Arthur Menken</title>
  </head>
`);

  // define the data
  var footerData = {
    currentYear: new Date().getFullYear(),
  };

  // render the templates with the data
  document.querySelector('footer').innerHTML = footerTemplate(footerData);
  document.querySelector('nav').innerHTML = navTemplate();
  document.querySelector('head').innerHTML = headTemplate();
});