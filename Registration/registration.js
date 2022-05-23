const emailInput = document.getElementById("email");
const firstNameInput = document.getElementById("nameInput");
const lastNameInput = document.getElementById("lastNameInput");

function clearInputs(){
    emailInput.value = "";
    firstNameInput.value = "";
    lastNameInput.value = "";
}

function register(){
    let formData = {
        email: emailInput.value,
        firstName: firstNameInput.value,
        lastName: lastNameInput.value
    }

    fetch("https://testapi.io/api/wehevov449/resource/toDoAppUsers",{
        method: "POST",
        headers: {'Content-type': "application/json"},
        body: JSON.stringify(formData)
    })
    .then(function(result){
        if (result.ok === true){
            alert("User created.");
            window.location.href = "/Login/login.html";
        }
        else{
            clearInputs();
            alert("API error.")
        }
    })
}