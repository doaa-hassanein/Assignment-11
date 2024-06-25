var signUpBtn = document.querySelector("button")
var nameInput = document.getElementById("signupName")
var email = document.getElementById("signupEmail")
var pass = document.getElementById("signupPassword")
var successmess = document.getElementById("successAlert")
var EmailAlertMessage = document.getElementById("EmailAlert")
var ExistAlertMessage = document.getElementById("ExistAlert")
var allUsre;

if (localStorage.getItem("allUsre") != null) {

    allUsre = JSON.parse(localStorage.getItem("allUsre"))
    console.log(allUsre)

} else {
    allUsre = []
}

signUpBtn.addEventListener("click", signUp)

function signUp() {

    var user = {
        userName: nameInput.value,
        userEmail: email.value,
        userPass: pass.value
    }

    if (ckeckInputs() == true) // inputs empty
    {
        // alert message
        EmailAlertMessage.classList.replace("d-none", "d-block")
        EmailAlertMessage.style.color = "#FF0000"


    } else if (userExist() == true) {

        ExistAlertMessage.classList.replace("d-none", "d-block")
        ExistAlertMessage.style.color = "#FAA0A0"

    }

    else if (ckeckInputs() == false) // inputs contains data
    {
        allUsre.push(user)

        localStorage.setItem("allUsre", JSON.stringify(allUsre))

        console.log(allUsre);
        getAlertMessage()
        clear();
    }
}

function clear() {
    nameInput.value = ""
    email.value = ""
    pass.value = ""
}

function getAlertMessage() {
    successmess.classList.replace("d-none", "d-block")
    successmess.style.color = "green"

}
function ckeckInputs() {
    if (nameInput.value = "" || email.value == "" || pass.value == "") {

        return true;

    }
    else {
        return false;
    }

}

function userExist() {

    for (var i = 0; i < allUsre.length; i++) {

        if (allUsre[i].userEmail == email.value) {

            return true

        }
    }
}