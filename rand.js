var rand = 0;
var min = 1;
var max = 100;
rand = Math.floor(Math.random() * (max - min + 1)) + min;
function myFunction() {
    var btn = document.getElementById('btn-btn');
    btn.style.display = '';
}
function hideFunction() {
    var input = document.getElementById('num');
    input === null || input === void 0 ? void 0 : input.setAttribute('disabled', '');
}
function btnFunction() {
    var btnInput = document.getElementById('btn');
    btnInput === null || btnInput === void 0 ? void 0 : btnInput.setAttribute('disabled', '');
}
var button = document.getElementById('btn');
var count = 0;
button === null || button === void 0 ? void 0 : button.addEventListener('click', function handleClick(event) {
    count += 1;
    var input = document.getElementById('num');
    var output = document.getElementById('res-el');
    var inputValue;
    inputValue = parseFloat(input.value);
    var result = document.getElementById('count-el');
    result.innerText += inputValue + ",";
    if (count >= 10) {
        output.innerText = "Game Over!....Sorry,You have reached the attemt of Limits ";
        myFunction();
        hideFunction();
        btnFunction();
    }
    else {
        if (inputValue > rand) {
            output.innerText = "The Number You have entered is Higher than the number";
        }
        else if (inputValue < rand) {
            output.innerText = "The Number You have entered is lower than the number";
        }
        else if (inputValue == rand) {
            output.innerText = "Congrats!You have entered the corret number";
            myFunction();
            hideFunction();
            btnFunction();
        }
        else {
            output.innerText = "Plaese enter a number";
        }
    }
});
