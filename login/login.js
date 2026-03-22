function login() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let storedUsername = localStorage.getItem("username")
    let storedPassword = localStorage.getItem("password")
    if (username == "" || password == "") {
        alert("Please fill in all fields")
        return
    }
    if (username === storedUsername && password === storedPassword) {
        alert("Login Successful")
        window.location.href = "../index.html"
    } else {
        alert("Invalid Username or Password")
    }

}