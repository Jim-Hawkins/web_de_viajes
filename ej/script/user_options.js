function logout()
{
    alert("Cerrando sesión...");
    document.getElementById("register_anonymous").style.display = "block";
    document.getElementById("login_anonymous").style.display = "block";
    
    document.getElementsByClassName("options_menu")[0].style.display = "none";
    document.getElementsByClassName("drop_down_button_when_loggedin")[0].style.display = "none";
    document.getElementById("profile_container").style.display = "none";
    
}

function closePopup()
{
    document.getElementById("logout_popup").style.display = "none";
}