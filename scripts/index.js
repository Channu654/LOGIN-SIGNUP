
var nav_bar = document.getElementById("nav_bar");

var nav_div = document.createElement("div");
nav_div.setAttribute("id", "nav_div");

var home = document.createElement("button");
home.textContent = "Home";
home.setAttribute("id","home");
home.onclick = function() {
    window.location.href = "./index.html";
}

var login = document.createElement("button");
login.textContent = "Login";
login.setAttribute("id","login");
login.onclick = function() {
    window.location.href = "./login.html";
}

var signup = document.createElement("button");
signup.textContent = "Signup";
signup.setAttribute("id","signup");
signup.onclick = function() {
    window.location.href = "./signup.html";
}

nav_div.append(home,signup,login);
nav_bar.append(nav_div);