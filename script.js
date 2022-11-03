var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
}

//<![CDATA[
$(window).load(function () { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(1000).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(1000).css({ 'overflow': 'visible' });})

//]]>

data = ['World Map', 'City/Villages', 'Heros', 'Troop Trees', 'Guides'];
        
list = document.getElementById("header");

data.forEach((item) => {
    let Button = document.createElement("Button");
    Button.innerText = item;
    Button.className = "btn-slice"
    Button.id = item
    Button.onclick = function () { test(item) }
    list.appendChild(Button);
})

function test(item) {
        var x1 = document.getElementById("worldmap");
        var x2 = document.getElementById("trooptree");
    if (item == "World Map") {
        if (x1.style.display === "none") {
            x1.style.display = "block";
            x2.style.display = "none";
        } else {
            x1.style.display = "none";
        }
    } else if (item == "City/Villages") { 
        console.log("2") 
    } else if (item == "Heros") { 
        console.log("3") 
    } else if (item == "Troop Trees") {
        if (x2.style.display === "none") {
            x2.style.display = "block";
            x1.style.display = "none";
        } else {
            x2.style.display = "none";
        } 
        console.log("4") 
    } else if (item == "Guides") { 
        console.log("5") 
    }
}