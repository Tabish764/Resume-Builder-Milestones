var showInput = false;
var handleClickEvent = function () {
    var inputDisplay = document.querySelectorAll(".input-section");
    showInput = !showInput;
    inputDisplay.forEach(function (visible) { return (visible.style.display = showInput ? "flex" : "none"); });
    var toogle = document.querySelector('button[type="button"]');
    toogle.innerText = showInput ? "Hide all sections" : "Show All Sections";
};
