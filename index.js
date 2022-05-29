let icon = document.getElementsByClassName("menu-toggle")[0];
icon.addEventListener("click", myFunction)
function myFunction() {
    let nav = document.getElementById("show");
    nav.classList.toggle("active");
}
// nav.setAttribute("class", "active");
// This attribute only work the button for one time 
// And classList.toggle("active")
// work on every click 