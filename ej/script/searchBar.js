function searchFunction() {

    var input, filter, figures;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    
    figures=document.getElementsByClassName('figure');
    for(i=0; i<figures.length;i++){

        if(figures[i].innerHTML.toUpperCase().indexOf(filter) > -1){
            figures[i].style.display = "";
        }   
        
        else{
            figures[i].style.display = 'none';
        }
    }
  }