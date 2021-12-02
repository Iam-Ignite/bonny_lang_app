'strict'

/* Set the width of the side navigation to 100% */
const open = document.querySelector('.openNav');
const close = document.querySelector('.closebtn');

const openNav = () => document.getElementById("mySidenav").style.width = "100%";
open.addEventListener("click", () => openNav());
close.addEventListener("click", () => closeNav());

const closeNav = () =>  document.getElementById("mySidenav").style.width = "0";
