const renderEngineerCard = require("../src/renderEngineer");
const renderInternCard = require("../src/renderIntern");
const renderManagerCard = require("../src/renderManager");

//function that takes in teammmembersarray and loops through it to check the roles of each object and then pushes the render employee.js template functino into the renderarray array with that objects inputted user info. so its like a directory that lets us know what render employee.js template to use and then put the users info into it and then push it into the renderArray array. and at end of function we join the renderarray in a string so we can pass it into generate html function
const renderTeamPage = function (data) {
  const renderArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerCard = renderManagerCard(employee);

      renderArray.push(managerCard);
    }

    if (role === "Engineer") {
      const engineerCard = renderEngineerCard(employee);

      renderArray.push(engineerCard);
    }

    if (role === "Intern") {
      const internCard = renderInternCard(employee);

      renderArray.push(internCard);
    }
  }

  const allTeamCardsString = renderArray.join("");
  return allTeamCardsString;
};

//function to generate the entire html teampage

function generateHtml(allTeamCardsString) {
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
        ${renderTeamPage(allTeamCardsString)}

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
