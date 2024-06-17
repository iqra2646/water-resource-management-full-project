function finalProject(project){
    const row = document.getElementById("card")
    const div = document.createElement("div")
    div.classList.add("col-3")
    div.innerHTML = `<div class="card">
    <img src="${project.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${project.name}</h5>
      <p class="card-text">${project.description}</p>
      <a href="https://www.pexels.com/photo/sunlit-beams-over-borehole-16227435/" class="btn btn-info">see more</a>
    </div>
  </div>`
  row.appendChild(div)
}
function projectData(project){
    fetch("http://localhost:3000/projects")
    .then(res =>res.json())
    .then(project =>{
        project.forEach(finalProject)
    })
}

projectData()