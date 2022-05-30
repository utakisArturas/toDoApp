const firstNameInput = document.getElementById("nameInput");
const lastNameInput = document.getElementById("lastNameInput");
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("click", () =>{
    let error = document.getElementById("error");
    if (error != null){
        error.remove();
    }
});

if (sessionStorage.getItem("loggedInUserEmail") != null){
    window.location.href = "../ToDo/toDo.html";
}

function login(){
    fetch("https://testapi.io/api/wehevov449/resource/toDoAppUsers")
        .then((response) => {return response.json()})
        .then((data) => {
            let users = data.data;
            let loggedInUser = users.filter(matchesLoginFormData);

            if (loggedInUser.length === 0){
                let error = document.createElement("span");
                error.innerText = "Combination does not exist!";
                error.setAttribute("id", "error");
                error.style.color = "red";
                lastNameInput.insertAdjacentElement("afterend", error);
                firstNameInput.value = "";
                lastNameInput.value = "";
            } else if (loggedInUser.length > 1){
                alert("Database error, multiple users found!");
            } else {
                window.sessionStorage.setItem("loggedInUserEmail", loggedInUser[0].email);
                window.location.href = "../ToDo/ToDo.html";
            }
        })
}

function matchesLoginFormData(user){
    return (
        (firstNameInput.value === user.firstName) 
        && 
        (lastNameInput.value === user.lastName)
        )
}