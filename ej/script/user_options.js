function logout()
{
    alert("Cerrando sesión...");
    document.getElementById("register_anonymous").style.display = "block";
    document.getElementById("login_anonymous").style.display = "block";
    
    document.getElementById("prof_popup").style.display = "none";
    document.getElementById("experiences_popup").style.display = "none";
    document.getElementById("logout_popup").style.display = "none";
    document.getElementById("profile_container").style.display = "none";
    
}

function closePopup()
{
    document.getElementById("logout_popup").style.display = "none";
}