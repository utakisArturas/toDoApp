const firstNameInput = document.getElementById("nameInput");
const lastNameInput = document.getElementById("lastNameInput");

async function login(){
    fetch("https://testapi.io/api/wehevov449/resource/toDoAppUsers")
        .then((response) => {return response.json()})
        .then((data) => {
            let users = data.data;
            let loggedInUser = users.filter(matchesLoginFormData);

            if (loggedInUser.length === 0){
                alert("User not found");
            } else if (loggedInUser.length > 1){
                alert("Database error, multiple users found!");
            } else {
                window.sessionStorage.setItem("loggedInUserEmail", loggedInUser[0].email);
                window.location.href("/ToDo/ToDo.html");
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