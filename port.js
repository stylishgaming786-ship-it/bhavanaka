
let user = localStorage.getItem("username")
if(user){
document.getElementById("userArea").innerHTML =
`<span class="username">Welcome ${user}</span>`

}
