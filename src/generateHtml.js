//function to check employees role and direct to correct render html template

const renderEngineerCard = require("../src/renderEngineer");
const renderInternCard = require("../src/renderIntern");
const renderManagerCard = require("../src/renderManager");

// function roleCheck(data) {
//   for (i = 0; i < data.length; i++) {
//     if (data[i] === "Engineer") {
//       renderEngineerCard();
//     } else if (data[i] === "Intern") {
//       renderInternCard();
//     } else if (data[i] === "Manager") {
//       renderManagerCard();
//     }
//   }
// }

const renderTeamPage = function (data) {
  renderEngineerCard(Engineer);
  renderInternCard(Intern);
  renderManagerCard(Manager);
  const renderArray = [];

  renderArray.push(
    data
      .filter((employee) => employee.getRole() === "Manager")
      .map((Manager) => renderManagerCard(Manager))
  );
  renderArray.push(
    data
      .filter((employee) => employee.getRole() === "Engineer")
      .map((Engineer) => renderEngineerCard(Engineer))
      .join("")
  );
  renderArray.push(
    data
      .filter((employee) => employee.getRole() === "Intern")
      .map((Intern) => renderInternCard(Intern))
      .join("")
  );

  return renderArray.join("");
};

//function to generate the html page

function generateHtml(data) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
        crossorigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="./style.css" />
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 d-flex justify-content-center">My Team</h1>
        </div>
      </div>
      <div class="container">
      <div class="row">
        <div class="col-12 col-md-4">
        ${renderTeamPage(data)}

    <script
      src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
      crossorigin="anonymous"
    ></script>
  </body>
</html>

     `;
}
module.exports = generateHtml;
