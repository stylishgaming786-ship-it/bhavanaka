function signup(){

let username = document.getElementById("username").value
let password = document.getElementById("password").value
let confirmPassword = document.getElementById("confirmPassword").value

if(username=="" || password=="" || confirmPassword==""){
    alert("Please fill in all fields")
    return
}

if(password.length < 6){
    alert("Password must be at least 6 characters long")
    return
}

if(password !== confirmPassword){
    alert("Passwords do not match")
    return
}

localStorage.setItem("username",username)
localStorage.setItem("password",password)

alert("Signup Successful")

window.location.href="../index.html"

}