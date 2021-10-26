function searchFunction() {
    //input: search bar content; filter: search words; figures: array of web experiences
    //hidden: counter of hidden figures
    let input, filter, figures, hidden;

    //get input from search bar and split if there are several destinations
    input = document.getElementById("buscador");
    filter = input.value.toUpperCase().split(" ");
    
    //check empty search bar
    if (filter[0] == ""){
        alert("Por favor, introduzca un destino o varios separados por espacios");
    }

    //get experience figure tags and set hidden variable
    figures = document.getElementsByClassName('figure');
    hidden = figures.length;

    //reset (hide) each figure and, if it matches any of the search words, 
    // show it again and go straight to next figure (also decrement hidden)
    for(let i = 0; i < figures.length; i++){
        figures[i].style.display = 'none';
        for(let j = 0; j < filter.length; j++){
            //console.log(figures[i].innerHTML.toUpperCase().indexOf(filter[j]));
            if(figures[i].innerHTML.toUpperCase().indexOf(filter[j]) > -1){
                figures[i].style.display = "";
                hidden--;
                break;
            }
        }
    }

    //inform the user if none of the destinations matches his query
    if(hidden == figures.length){
        alert("No se encontraron destinos que satisfagan sus criterios.");
    }
  }
