/*VALIDAR DATOS DEL FORMULARIO*/




function createCookie(){
    if( checkCookie(document.getElementById("register_form_uname").value) ){
        alert("Ese nombre ya está registrado");
        return;
    } else{
        const d = new Date();
        d.setTime(d.getTime() + (30*24*60*60*1000));
        let expires = "; expires="+ d.toUTCString();
        
        let info = [
                    document.getElementById("register_form_password").value,
                    document.getElementById("register_form_name").value,
                    document.getElementById("register_form_email").value,
                    document.getElementById("register_form_birth").value,
                    document.getElementById("register_form_perfimg").value,
                    document.getElementById("register_form_prefs").value,
                    ];

        document.cookie = document.getElementById("register_form_uname").value + "=" + info + expires + "; path=/; SameSite=Lax";
        //alert(document.getElementById("register_body").value);
        document.getElementById("register_body").value.style.display('none');
    }
}

function getCookie(name) {
  name = name + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  alert("entro " + name);
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let name = document.getElementById("login_form_name").value;
  return (getCookie(name) != "");
}

