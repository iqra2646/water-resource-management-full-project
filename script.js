document.querySelector("form").addEventListener("submit",prjects);
function prjects(e){ 
e.preventDefault()
const Title=document.getElementById("title")
const Plot=document.getElementById("plot")
const Poster=document.getElementById("poster")



const Objectproject={ 

    Title: Title.value,
    Plot: Plot.value,
    Poster:Poster.value,
    }
    
    fetch("http://localhost:3000/projects",{ 
    method:"POST",
    header:{ 
    'content-type':'application/json'
    },
    body:JSON.stringify(Objectproject)
    })
    .then(res=>res.json())
    .then(console.log("submitted"))
    
    
    }
    

function addproject(project){
    let row =document.getElementById("card")
    let div =document.createElement("div")
    div.classList.add("col-3")
    div.innerHTML=`<div class="card">
    <img src="${project.Poster}" class="card-img-top" alt="" height="300px">
    <div class="card-body">
      <h5 class="card-title">${project.Title}</h5>
      <p class="card-text">${project.Plot}</p>
      <button><a href="#" class="btn btn-outline">Delete</a></button>
    </div>
  </div>`
  row.appendChild(div)


 // 6 deleting update but not json server
 div.querySelector("button").addEventListener("click" , function(){
    div.remove()
   deleteproject(project.id)
  })
}


// 7 deleting update also from json server
function deleteproject(id){
  fetch("http://localhost:3000/update/${id}",{
    method: "DELETE",
    headers: {
      'content-type':'application/json'
    }
  })
}
  


  function getproject(project){
    fetch("http://localhost:3000/projects")
    .then(res=>res.json())
    .then(project =>{
     project.forEach(addproject)
     
    })
    }


    document.addEventListener("DOMContentLoaded", function(){
        getproject();
      })