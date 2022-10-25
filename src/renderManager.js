//function to render the managers card using html template and inputted user info

function renderManagerCard(Manager) {
  return ` 
                <div class="card" style="width: 18rem">
                  <div class="card-header">
                    <h1 class="d-flex justify-content-center"> ${Manager.name}</h1>
                    <h5 class="d-flex justify-content-center">Manager</h5>
                    <span class="<span class="material-symbols-outlined">
                    coffee
                    </span class= "d-flex justify-content-center"
                      >coffee</span
                    >
                  </div>
          
                  <div class="card-body">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item border">ID: ${Manager.id}</li>
                      <li class="list-group-item border">Email:
                      <a class="email" href="mailto:
                        ${Manager.email}"target="_blank">${Manager.email}</a>
                      </li>
                      <li class="list-group-item border">Office: 
                      ${Manager.office}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
}

module.exports = renderManagerCard;
