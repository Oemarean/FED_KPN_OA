// JavaScript Document
console.log("hi");

// NAVIGATIE DEEL

// Open
  var menuOpenButton = document.querySelector("header button:nth-of-type(2)");

  menuOpenButton.addEventListener("click" , menuOpenen);

  function menuOpenen(){
    var deNav = document.querySelector("header nav");
    deNav.classList.add("open")
 }

// Close
  var sluitenButton = document.querySelector("header nav:nth-of-type(2) button");

  sluitenButton.addEventListener("click" , menuSluiten);

  function menuSluiten(){
    var deNav = document.querySelector("header nav");
    deNav.classList.remove("open")
}

// FOOTER DEEL

// footermenu uitklap
var footerButton1 = document.querySelector("footer section:nth-of-type(1) button");
var footerKopje1 = document.querySelector("footer section:nth-of-type(1) h2");

footerButton1.addEventListener("click", toggleMenu);
footerKopje1.addEventListener("click", toggleMenu);

function toggleMenu() {
	var hetMenu = document.querySelector("footer section:nth-of-type(1) ul");
	hetMenu.classList.toggle("uitklap");
}
