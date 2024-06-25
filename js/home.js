var Welcomemessage = document.getElementById("WelcomeMessage");

console.log(Welcomemessage);


if(localStorage.getItem("userName") != null){

    Welcomemessage.innerHTML = `Welcome ${localStorage.getItem("userName")}`;
    console.log(localStorage.getItem('userName'));

}


console.log(localStorage.getItem('userName'));