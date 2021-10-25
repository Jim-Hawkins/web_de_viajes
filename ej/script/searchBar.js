function searchFunction() {

    var input, filter, figures;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    
    figures=document.getElementsByClassName('figure');
    //alert(div);
    //divCol = div.getElementsByClass('column');

    for(i=0; i<figures.length;i++){
        //alert(div[i].getElementsById('column1'));
        //divCol = div[i].getElementsById('column');

        if(figures[i].innerHTML.toUpperCase().indexOf(filter) > -1){
            figures[i].style.display = "";
        }   
        
        else{
            figures[i].style.display = 'none';
        }
    }
  }