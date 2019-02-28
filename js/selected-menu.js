var btns = document.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var selected = document.getElementsByClassName("selected");
  if (selected.length > 0) { 
    selected[0].className = selected[0].className.replace(" selected", "");
  }
  this.className += " selected";
  });
}