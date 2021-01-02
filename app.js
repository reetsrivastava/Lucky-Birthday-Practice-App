var birthday = document.querySelector("#birthday");
var number = document.querySelector("#luckyNumber");
var result = document.querySelector("#result");
var btn = document.querySelector("#btn");
var imgResult = document.querySelector(".img-result");
var image = document.querySelector("img");
var user = document.querySelector(".user");

function checkLuck() {
    var dayInput = birthday.value;
    var numInput = number.value;
    
    var lastDigit = Math.trunc(dayInput%10);
    var firstDigit = Math.trunc(dayInput/10);
    var sum = lastDigit + firstDigit;
    console.log(sum);
    if(sum == numInput) {
        image.src = "images/luckyImg.jpg";
        imgResult.classList.remove("img-result");
        user.classList.add("img-result");
        result.innerText = "Haha Lucky Macha!!";
    } else {
        // image.src = "images/luckyImg.jpg";
        imgResult.classList.remove("img-result");
        user.classList.add("img-result");
        result.innerText = "Not so lucky";
    }
}



btn.addEventListener("click",checkLuck);
