
/*column = document.getElementsByClassName('column');
console.log("hola");
alert(column);
column1 = column[0];
alert(column1);*/
/*
const column1 = document.querySelectorAll('#column1');

column1.addEventListener('dragover', e => {
    e.preventDefault();
    console.log("dragover");
});

column1.addEventListener('drop', e => {
    console.log("drop");
    column1.appendChild();
    
});
*/

/*
document.addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "Hello World";
}); */

//column1.

function allowDrop(ev) {
    ev.preventDefault();
  }
  
function drag(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
    
  }
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }


