
/* Function to create a cookie when a user registers in the page */
function createCookieOnRegistry(){

    //email will be cookie identifier
    let email = register_form_email.value;
    
    //check whether this email is already registered
    if ( cookieExists(email) ){
        alert("Ese nombre ya está registrado");
        //window.location.href = "#";
        return;
    }
    
    //check if any compulsory parameter was not typed
    if (email === "" 
       || register_form_uname.value === "" 
       || register_form_password.value === "" 
       || register_form_name.value === ""
       || register_form_birth.value === "")
    {
        
        alert("Introduce todos los campos obligatorios.");
        return;
    }

    //set the expiration parameter to one month from now
    let expiration = new Date();
    expiration.setTime(expiration.getTime() + (30*24*60*60*1000));
    expiration = "; expires="+ expiration.toUTCString();
    
    //set an array containing form's informtarion
    let info = [
                register_form_uname.value,
                register_form_password.value,
                register_form_name.value,
                register_form_birth.value,
                register_form_perfimg.value,
                register_form_prefs.value
                ];

    //create a new cookie
    document.cookie = email + "=" + info + expiration + "; path=/";
    //close the popup
    //window.location.href = "#";
}

/* Reveals whether a cookie exists in the webpage */
function cookieExists(cookie_name) {
  return (getCookie(cookie_name) !== "");
}


/* Receives a cookie_name and returns the corresponding cookie */
function getCookie(cookie_name) {
    //add = symbol for easing search and cookie manipulation
    //cookie_name += "=";
    
    //obtain the array of cookies and declare an iterator
    let cookies = decodeURIComponent(document.cookie).split(';');
    let current_cookie = null;

    //examine each cookie by comparing its identifier with 'cookie_name' 
    for (let i = 0; i < cookies.length; i++) {
        current_cookie = cookies[i];
        //remove preceding spaces if any
        while (current_cookie.charAt(0) == ' ') {
            current_cookie = current_cookie.substring(1);
        }
        if (current_cookie.substring(0, cookie_name.length) === cookie_name) {
            //on success, return only the content of the cookie
            return current_cookie.substring(cookie_name.length, current_cookie.length);
        }
    }
    //if none of the cookies matches 'cookie_name', return an empty string
    return "";
}

function checkPasswordOnLogin(email, pwd){
  //Check the password of the existing cookie
  user = getCookie(email);
  user = user.split(',');
  if (user[1] === pwd){
    return true;
  }
  return false;
}


function checkCookieLogin() {
  //get email introduced and check wheter it is registered
  let email = login_form_email.value;
  if (cookieExists(email)) {
      if (checkPasswordOnLogin(email, login_form_password.value)){
        alert("Bienvenido a Viajes Ibérica");
        document.getElementById("register_anonymous").style.display = 'none';
        document.getElementById("login_anonymous").style.display = 'none';

        /*document.getElementById("prof_popup").style.display = 'block';
        document.getElementById("experiences_popup").style.display = 'block';
        document.getElementById("logout_popup").style.display = 'block';*/
        document.getElementById("profile_container").style.display = "block";
        document.getElementById("menu_profile").style.display = "inline";
        document.getElementsByClassName("drop_down_button_when_loggedin")[0].style.display = "inline";

        showProfile(getCookie(email));
        return;
      }
      alert("Introduzca una contraseña correcta");
    } else{
        alert("Este correo electrónico no está registrado. Por favor introduzca un correo correcto.");
        window.location.href='#';
        return;
    }
    //window.location.href='#';
    
    //document.getElementById("register_anonymous").style.visibility = 'hidden';
    //document.getElementById("login_anonymous").style.visibility = 'hidden';
    //reg.style.visibility = 'hidden';
    //log.style.visibility = 'hidden';

    //let img = document.getElementById("img_perf");
    //img.display = 'block';
    //document.getElementById("logId").style.visibility = 'hidden';
    
  }

  function showProfile(cookie) {
    cookie = cookie.split(',');
    document.getElementById("profile_name").innerHTML = cookie[0].substring(1);
    document.getElementById("profile_img").visibility = "visible";
  }










