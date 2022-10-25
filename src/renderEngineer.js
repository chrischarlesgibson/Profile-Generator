const Engineer = require("../classes/Engineer");

function renderEngineerCard(Engineer) {
  return ` 
        <div class="card" style="width: 18rem">
          <div class="card-header">
            <h1 class="d-flex justify-content-center"> ${Engineer.getName()}</h1>
            <h5 class="d-flex justify-content-center">${Engineer.getRole()}</h5>
            <span class="material-symbols-outlined d-flex justify-content-center"
              >engineering</span
            >
          </div>
  
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item border"> ID: ${Engineer.getId()}</li>
              <li class="list-group-item border">Email:
                <a class="email" href="mailto:
                ${Engineer.getEmail()}"target="_blank">${Engineer.getEmail()}</a>
                </li>
              <li class="list-group-item border">Github:<a class="github" href="https://github.com/${Engineer.getGithub()}" target="_blank"> ${Engineer.getGithub()}</a>
            
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

module.exports = renderEngineerCard;
