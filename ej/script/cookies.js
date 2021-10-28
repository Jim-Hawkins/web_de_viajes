
/* Function to create a cookie when a user registers in the page */
function createCookieOnRegistry(){

    document.cookie = "";
    //email will be cookie identifier
    let email = register_form_email.value;
    
    //check whether this email is already registered
    if ( cookieExists(email) ){
        alert("Ese correo ya está registrado");
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
    //alert(cookie_name);
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
    //if none of the cookies matches 'cookie_name', return an empty string4
    return "";
}

/* When the user tries to login it will check if the fields are correct */
function checkPasswordOnLogin(email, pwd){
  
  //obtain the cookie and it splits the str with the ,'s
  user = getCookie(email).split(',');

  //returns if the passwords are the same so the user can access to his/her profile
  return user[1] === pwd
}

/* Checks the cookie after login */
function checkCookieLogin() {
  //get email introduced and check wheter it is registered
  let email = login_form_email.value;
  if (cookieExists(email)) {

    //checks if the login is correct (fields are correct)
      if (checkPasswordOnLogin(email, login_form_password.value)){
        
        //It shows the profile stuff
        showProfile(getCookie(email));
        return;
      }

      //if the password was not correct => alert
      alert("Introduzca una contraseña correcta");
  } else{
      //if the cookie does not exist => alert
      alert("Este correo electrónico no está registrado. Por favor introduzca un correo correcto.");
      window.location.href='#';
      return;
  }    
}

/* It will show all the buttons, imgs of the profile after log in... and it will hide all the previous stuff */
function showProfile(cookie) {
    alert("Bienvenido a Viajes Ibérica");

    //obtains the cookie
    cookie = cookie.split(',');

    //it shows the profile name in the header
    document.getElementById("profile_name").innerHTML = cookie[0].substring(1);

    //show the profile img and the drop-down button
    document.getElementById("profile_img").visibility = "visible";
    document.getElementById("profile_container").style.display = "block";
    document.getElementById("drop_down_button_when_loggedin").style.display = "block";

    //hide the register and login buttons
    document.getElementById("register_anonymous").style.display = 'none';
    document.getElementById("login_anonymous").style.display = 'none';
  }

function changeCookie()
{
  //nuevo nombre que escoge el usuario
  let newname = change_user.value;
  let newimg = change_img.value;
  let newint = change_interests.value;

  console.log(document.cookie);
  //nombre antiguo que aparece debajo de la foto de perfil
  let uname=document.getElementById("profile_name").innerHTML;
  //cada una de las cookies
  let cookies = document.cookie.split(';');
  for(let i = 0; i < cookies.length; i++) {
    let value = cookies[i].substring(cookies[i].indexOf('=')+1);
    value = value.split(",");
    //alert(cookies[i]);
    email = cookies[i].split("=")[0];
    payload = cookies[i].split("=")[1].split(",");
    
    if (value[0]===uname){
      
      let info = [
        newname,
        payload[1],
        payload[2],
        payload[3],
        newimg,
        newint
        ];

      document.cookie = email + "=" + info + payload[6] + "; path=/";
      document.getElementById("profile_name").innerHTML = newname;
    }
    
}
}










