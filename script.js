function loadUser(){
    fetch('users.json')
    .then(response=>response.json())
    .then(users=>{
        const userContainer=document.getElementById("userContainer")
        users.forEach(user => {
            const userCard=document.createElement('div')
            userCard.classList.add('user-card');

            userCard.innerHTML=`<div class='image'><img src="${user.image}"></div> <div class='discription'><h1> ${user.name}</h1><h3> ${user.profession}</h3> <h3>Age: ${user.age}</h3>  
              
              <p > Email:${user.email}</p></div>`
            userContainer.appendChild(userCard)
            console.log(userContainer)

        });
    })
}
(loadUser())
