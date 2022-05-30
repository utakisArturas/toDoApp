const emailInput = document.getElementById("email");
const firstNameInput = document.getElementById("nameInput");
const lastNameInput = document.getElementById("lastNameInput");

if (sessionStorage.getItem("loggedInUserEmail") != null){
    window.location.href = "./ToDo/ToDo.html";
}

function clearInputs(){
    emailInput.value = "";
    firstNameInput.value = "";
    lastNameInput.value = "";
}

function register(){
    if (!isEmailValid(emailInput.value)){
        alert("Invalid email!");
        return false;
    }

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
            window.location.href = "./Login/login.html";
        }
        else{
            clearInputs();
            alert("API error.")
        }
    })
}

function isEmailValid(email){
    let validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(validEmailRegex);
}