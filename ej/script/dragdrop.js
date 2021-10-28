/* This function will not let the navigator to do the default event handler to let us do the drag and drop */
function allowDrop(ev) {
    ev.preventDefault();
  }
  
/* This function will allow to drag items */
function drag(ev) {

    //puts in the dataTransfer the data that the user wants to drag
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
/* This function will allow to drop in the divs the figures (images with the figcaption) */
function drop(ev) {

    //prevent the navigator to do the default event handler to let us do the drag and drop
    ev.preventDefault();

    //save in the variable data what is in the dataTransfer (from the drag function)
    var data = ev.dataTransfer.getData("text");

    //it appends the data to the target (div)
    ev.target.appendChild(document.getElementById(data));
    
  }












