/* Function to logout */
function logout()
{
    alert("Cerrando sesión...");

    //set to block the display of the register and login buttons
    document.getElementById("register_anonymous").style.display = "block";
    document.getElementById("login_anonymous").style.display = "block";
    
    //set the display from all the buttons and img of the profile to none
    document.getElementsByClassName("options_menu")[0].style.display = "none";
    document.getElementById("drop_down_button_when_loggedin").style.display = "none";
    document.getElementById("profile_container").style.display = "none";
    
}

/* Function to close the pop-out */
function closePopup()
{
    document.getElementById("logout_popup").style.visibility = "hidden";
    logout_popup.style.opacity = "0";
}

addEventListener('resize', function(event){
    let width = window.innerWidth;
    if (width > 1120 
        && document.getElementsByClassName("menu")[0].style.display === "none")
        {
            document.getElementsByClassName("menu")[0].style.display = "block";
        }
});

window.onclick = function(event) {
    let main_menu = document.getElementById("drop_down_button");
    let menu_button = document.getElementById("drop_down_button_when_loggedin");
    let my_profile_button = document.getElementById("prof_button");
    let exps_button = document.getElementById("experiences_button");
    let logout_button = document.getElementById("logout_button");

    if (event.target == main_menu)
    {
        let main_menu_dropdown = document.getElementsByClassName("menu")[0];
        if (main_menu_dropdown.style.display === "none")
        {
            main_menu_dropdown.style.display = "block";
        } else{
            main_menu_dropdown.style.display = "none"
        }
    } else if (event.target == menu_button)
    {
        let user_options_menu = document.getElementsByClassName("options_menu")[0];
        if (user_options_menu.style.display === "none")
        {
            user_options_menu.style.display = "block";
        } else{
            user_options_menu.style.display = "none"
        }
    } else if (event.target == my_profile_button)
    {
        document.getElementById("prof_popup").style.visibility = "visible";
        document.getElementById("prof_popup").style.opacity = "1";
    } else if (event.target == exps_button)
    {
        document.getElementById("experiences_popup").style.visibility = "visible";
        document.getElementById("experiences_popup").style.opacity = "1";
    } else if (event.target == logout_button)
    {
        document.getElementById("logout_popup").style.visibility = "visible";
        document.getElementById("logout_popup").style.opacity = "1";
    }
}
