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
