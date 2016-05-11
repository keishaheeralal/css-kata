function tabNavigation(e) {

  /*get element that's currently active and remove*/
  var active = document.getElementsByClassName("active");
  active[0].classList.remove("active");

  /*add class 'active' to parent element i.e. <li> element*/
  e.target.parentNode.classList.add("active");

  /*get 'visible' content and hide*/
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

function modalDialog(e) {

  /*get content of menu item clicked and change in HTML*/
  var clicked = document.getElementById("clicked");
  clicked.innerHTML = "'" + e.target.text + "'";

  /*set dialog to display*/
  var dialog = document.getElementsByClassName("close");
  dialog[0].classList.remove("close");

  /*add screen behind dialog*/
  var dialogScreen = document.getElementById("modalBackground");
  dialogScreen.classList.add("modal-background");
}

function closeDialog(e) {

  /*hide dialog*/
  var dialog = document.getElementsByClassName("modal-dialog");
  dialog[0].classList.add("close");

  /*hide screen*/
  var dialogScreen = document.getElementById("modalBackground");
  dialogScreen.classList.remove("modal-background");
}

/*add click event listeners for tab navigation*/
var elTab = document.getElementsByClassName("tab-menu");
var i;
for (i = 0; i < elTab.length; i++) {
    elTab[i].addEventListener("click", tabNavigation, false);
}

/*add click event listeners for side menu*/
var elSide = document.getElementsByClassName("side-menu");
var j;
for (j = 0; j < elSide.length; j++) {
    elSide[j].addEventListener("click", modalDialog, false);
}

/*add click event listener for X on dialog box*/
var elA = document.getElementById("close");
elA.addEventListener("click", closeDialog, false);
