// JavaScript Document

// Open
var menuOpenButton = document.querySelector("header > button");
menuOpenButton.addEventListener("click" , menuOpenen);
function menuOpenen(){
  var deNav = document.querySelector("header nav");
  deNav.classList.add("open")
}

// Close
var sluitenButton = document.querySelector("header nav button");
sluitenButton.addEventListener("click" , menuSluiten)
function menuSluiten(){
  var deNav = document.querySelector("header nav");
  deNav.classList.remove("open")
}


// footermenu uitklap
var footerButton = document.querySelector("footer button");
// var deHeader = document.querySelector("section:nth-of-type(1) h2");

footerButton.addEventListener("click", toggleMenu);
// deHeader.addEventListener("click", toggleMenu);

function toggleMenu() {
	var hetMenu = document.querySelector("footer ul");
	hetMenu.classList.toggle("open");
}
