var text = document.querySelector(".text");
var btn = document.querySelector("#btn");
var div = document.getElementById("container");
var error = document.querySelector(".error");
btn.addEventListener("click", () => {
    var oldcolor = div.style.backgroundColor;
    console.log(1, text.value);
    div.style.backgroundColor = text.value;
    if (oldcolor === div.style.backgroundColor) {
        error.classList.remove("hide");
        error.classList.add("show");
        setTimeout(() => {
            error.classList.remove("show");
            error.classList.add("hide");
        }, 2000);
    }
});