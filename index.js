let icon = document.getElementsByClassName("menu-toggle")[0];
icon.addEventListener("click", myFunction)
function myFunction() {
    var element = document.getElementById("show");
    element.classList.toggle("active");
}