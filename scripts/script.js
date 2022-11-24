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
var footerButton1 = document.querySelector("footer section:nth-of-type(1) button");
var footerKopje1 = document.querySelector("footer section:nth-of-type(1) h2");

var footerButton2 = document.querySelector("footer section:nth-of-type(2) button");
var footerKopje2 = document.querySelector("footer section:nth-of-type(2) h2");

var footerButton3 = document.querySelector("footer section:nth-of-type(3) button");
var footerKopje3 = document.querySelector("footer section:nth-of-type(3) h2");

var footerButton4 = document.querySelector("footer section:nth-of-type(4) button");
var footerKopje4 = document.querySelector("footer section:nth-of-type(4) h2");

var footerButton5 = document.querySelector("footer section:nth-of-type(5) button");
var footerKopje5 = document.querySelector("footer section:nth-of-type(5) h2");


footerButton1.addEventListener("click", toggleMenu1);
footerKopje1.addEventListener("click", toggleMenu1);
footerButton2.addEventListener("click", toggleMenu2);
footerKopje2.addEventListener("click", toggleMenu2);
footerButton3.addEventListener("click", toggleMenu3);
footerKopje3.addEventListener("click", toggleMenu3);
footerButton4.addEventListener("click", toggleMenu4);
footerKopje4.addEventListener("click", toggleMenu4);
footerButton5.addEventListener("click", toggleMenu5);
footerKopje5.addEventListener("click", toggleMenu5);

function toggleMenu1() {
	var hetMenu1 = document.querySelector("footer section:nth-of-type(1) ul");
	hetMenu1.classList.toggle("mobiel");
}

function toggleMenu2() {
	var hetMenu2 = document.querySelector("footer section:nth-of-type(2) ul");
	hetMenu2.classList.toggle("toestellen");
}

function toggleMenu3() {
	var hetMenu3 = document.querySelector("footer section:nth-of-type(3) ul");
	hetMenu3.classList.toggle("internet");
}

function toggleMenu4() {
	var hetMenu4 = document.querySelector("footer section:nth-of-type(4) ul");
	hetMenu4.classList.toggle("stream");
}

function toggleMenu5() {
	var hetMenu5 = document.querySelector("footer section:nth-of-type(5) ul");
	hetMenu5.classList.toggle("tablets");
}
