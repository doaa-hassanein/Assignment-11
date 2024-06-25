var emailInput = document.getElementById("loginEmail")
var passInput = document.getElementById("loginPassword")
var loginBtn = document.getElementById("loginBtu")
var alertMessage = document.getElementById("EmailAlery")

if (localStorage.getItem("allUsre") != null) {

    allUsre = JSON.parse(localStorage.getItem("allUsre"))
    console.log(allUsre)

} else {
    allUsre = []
}

function siginIn() {

    if (ckeckInputs() == true) {

        // alert message
        getAlertMessage("please Enter all data", "#FF0000")

    }
    else {
        if (checkEmail_Pass() == true) {
            // navigate to home page
            window.location.href = "home.html"
    
        }
        else {
            // alert
            getAlertMessage("Email or password not correct", "red")
        }
    }
}


loginBtn.addEventListener("click", siginIn)

function checkEmail_Pass() {
    for (var i = 0; i < allUsre.length; i++) {
        if (allUsre[i].userEmail == emailInput.value && allUsre[i].userPass == passInput.value) {

            // user has an account
            localStorage.setItem("userName", allUsre[i].userName)
            return true;

        }
    }
}

function getAlertMessage(text, color) {

    alertMessage.classList.replace("d-none", "d-block")
    alertMessage.innerHTML = text
    alertMessage.style.color = color
}

function ckeckInputs() {
    if (emailInput.value == "" || passInput.value == "") {

        return true;

    }
    else {
        return false;
    }

}




















