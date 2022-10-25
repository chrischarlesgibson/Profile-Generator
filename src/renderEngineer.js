const Engineer = require("../classes/Engineer");

function renderEngineerCard() {
  return ` <div class="container">
    <div class="row">
      <div class="col-12 col-md-4">
        <div class="card" style="width: 18rem">
          <div class="card-header">
            <h1 class="d-flex justify-content-center"> ${Engineer.name}</h1>
            <h5 class="d-flex justify-content-center">${Engineer.role}</h5>
            <span class="material-icons d-flex justify-content-center"
              >face</span
            >
          </div>
  
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item border"> ID: ${Engineer.id}</li>
              <li class="list-group-item border">Email:
                <a class="email" href="mailto:
                  ${Engineer.email}"target="_blank">${Engineer.email}</a>
                </li>
              <li class="list-group-item border">Github:<a class="github" href="https://github.com/${Engineer.github}" target="_blank"> ${Engineer.github}</a>
            
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

module.exports = renderEngineerCard();
