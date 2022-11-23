// JavaScript Document
console.log("hi");

// NAVIGATIE DEEL

// Open
var menuOpenButton = document.querySelector("header nav ul li:nth-of-type(5) button");

  menuOpenButton.addEventListener("click" , menuOpenen);

  function menuOpenen(){
    var deNav = document.querySelector("header nav:last-of-type");
    console.log(deNav)
    deNav.classList.add("open")
 }

// Close
  var sluitenButton = document.querySelector("header nav:nth-of-type(2) button");

  sluitenButton.addEventListener("click" , menuSluiten);

  function menuSluiten(){
    var deNav = document.querySelector("header nav:last-of-type");
    deNav.classList.remove("open")
}

// FOOTER DEEL

// footermenu uitklap
var footerButton1 = document.querySelector("footer section button");
var footerKopje1 = document.querySelector("footer section h2");

footerButton1.addEventListener("click", toggleMenu);
footerKopje1.addEventListener("click", toggleMenu);

function toggleMenu() {
	var hetMenu = document.querySelector("footer section ul");
	hetMenu.classList.toggle("uitklap");
}
