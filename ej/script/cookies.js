
/* Function to create a cookie when a user registers in the page */
function createCookieRegistry(){
    if(checkCookie(document.getElementById("register_form_email").value) ){
        alert("Ese nombre ya está registrado");
        return;
    } else{
        const d = new Date();
        d.setTime(d.getTime() + (30*24*60*60*1000));
        let expires = "; expires="+ d.toUTCString();
        
        let info = [
                    document.getElementById("register_form_password").value,
                    document.getElementById("register_form_name").value,
                    document.getElementById("register_form_uname").value,
                    document.getElementById("register_form_birth").value,
                    document.getElementById("register_form_perfimg").value,
                    document.getElementById("register_form_prefs").value,
                    ];
        
        document.cookie = document.getElementById("register_form_email").value + "=" + info + expires + "; path=/; SameSite=secure";
        

        let expr = true;
        for (i=0;i<info.length - 2;i++){
          if (info[i] == ""){
            expr = false;
          }
        }
        if (expr){
          window.location.href='#';
        } else{
          alert("Introduce todos los campos obligatorios.");
        }
    }
}

function getCookie() {
  let email = '';
  email = email + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookie_element = decodedCookie.split(';');
  for(let i = 0; i < cookie_element.length; i++) {
    let c = cookie_element[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(email) == 0) {
      return c.substring(email.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let email = document.getElementById("register_form_email").value;
  return (getCookie(email) != "");
}

function checkCookieLogin() {
  //get email introduced and check wheter it is registered
  let email = document.getElementById("login_form_email").value;
  if (getCookie(email != "")) {
    window.location.href='#';
  }

  else{
    alert("Este correo electrónico no está registrado. Por favor introduzca un correo correcto.");
  }

  
}