//function to render the engineers card using html template and inputted user info

function renderEngineerCard(Engineer) {
  return ` 
        <div class="card" style="width: 18rem;margin: 25px; box-shadow: 7px 1px 13px 2px rgba(0, 0, 0, 0.58)">
          <div class="card-header text-white bg-primary">
            <h1 class="d-flex justify-content-center"> ${Engineer.name}</h1>
            <h5 class="d-flex justify-content-center">Engineer</h5>
            <span class="material-icons d-flex justify-content-center"
              >engineering</span>
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
    `;
}

module.exports = renderEngineerCard;
