function tabNavigation(e){

  /*get element that's currently active and remove*/
  var active = document.getElementsByClassName("active");
  active[0].classList.remove("active");

  /*add class 'active' to parent element i.e. <li> element*/
  e.target.parentNode.classList.add("active");

  /*get 'visible' content and hide*/
  //debugger
  var visible = document.getElementsByClassName("visible");
  var element = visible[0];
  element.classList.remove("visible");
  element.classList.add("hidden");

  /*get element that was clicked*/
  var clickedID = e.target.getAttribute('data-id');

  /*get content and make it visible*/
  var clickedContent = document.getElementById(clickedID);
  clickedContent.classList.remove("hidden");
  clickedContent.classList.add("visible");
}


var el = document.getElementsByClassName("tab-menu");
var i;
for (i = 0; i < el.length; i++) {
    el[i].addEventListener("click", tabNavigation, false);
}
