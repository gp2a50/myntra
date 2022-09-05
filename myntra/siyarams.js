// js for toggle menu
var menuitems = document.getElementById("menuitems");
menuitems.style.maxHeight = "0px";

function menutoggle(){
    if (menuitems.style.maxHeight == "0px") {
        menuitems.style.maxHeight = "200px";
    }
    else{
        menuitems.style.maxHeight = "0px";
    }
}

// js for product gallery
var productimg = document.getElementById("productimg");
var smallimg = document.getElementsByClassName("smallimg");

smallimg[0].onclick = function()
{
    productimg.src = smallimg[0].src;
}
smallimg[1].onclick = function()
{
    productimg.src = smallimg[1].src;
}
smallimg[2].onclick = function()
{
    productimg.src = smallimg[2].src;
}
smallimg[3].onclick = function()
{
    productimg.src = smallimg[3].src;
}

// js for toggle form
var loginform = document.getElementById("loginform");
var regform = document.getElementById("regform");
var indicator = document.getElementById("indicator");

function register(){
    regform.style.transform = "translateX(0px)";
    loginform.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
}

function login(){
    regform.style.transform = "translateX(300px)";
    loginform.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
}