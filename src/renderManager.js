function renderManagerCard(Manager) {
  return ` 
                <div class="card" style="width: 18rem">
                  <div class="card-header">
                    <h1 class="d-flex justify-content-center"> ${Manager.getName()}</h1>
                    <h5 class="d-flex justify-content-center">${Manager.getRole()}</h5>
                    <span class="<span class="material-symbols-outlined">
                    coffee
                    </span> d-flex justify-content-center"
                      >coffee</span
                    >
                  </div>
          
                  <div class="card-body">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item border">ID: ${Manager.getId()}</li>
                      <li class="list-group-item border">Email:
                      <a class="email" href="mailto:
                        ${Manager.getEmail()}"target="_blank">${Manager.getEmail()}</a>
                      </li>
                      <li class="list-group-item border">Office: 
                      ${Manager.getOffice()}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
}

module.exports = renderManagerCard;
