var button = document.getElementsByTagName("button")[0];
var color = document.getElementById("color");
button.addEventListener("click", function(e) {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    color.value = randomCode;
    navigator.clipboard.writeText(randomCode);
    console.log("copied "+randomCode)
});