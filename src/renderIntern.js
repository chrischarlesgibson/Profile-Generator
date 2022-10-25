function renderInternCard(Intern) {
  return ` 
          <div class="card" style="width: 18rem">
            <div class="card-header">
              <h1 class="d-flex justify-content-center"> ${Intern.name}</h1>
              <h5 class="d-flex justify-content-center">Intern</h5>
              
              <span class="material-symbols-outlined d-flex justify-content-center"">school</span>
            </div>
    
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item border">ID: ${Intern.id}</li>
                <li class="list-group-item border">Email:
                <a class="email" href="mailto:
                  ${Intern.email}"target="_blank">${Intern.email}</a>
                </li>
                <li class="list-group-item border">School: 
                ${Intern.school}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

module.exports = renderInternCard;
