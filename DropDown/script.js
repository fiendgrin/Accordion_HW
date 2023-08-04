const myButton = document.querySelector(".myButton");
const bottomText = document.querySelector(".bottom");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");


myButton.addEventListener("click", () => {

    if (minus.style.display !== "initial") {
        bottomText.classList.add("active")
        plus.style.display = "none";
        minus.style.display = "initial";
    }else{
        bottomText.classList.remove("active")
        plus.style.display = "initial";
        minus.style.display = "none";
    }


})