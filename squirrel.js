const button = document.getElementById('squirrelButton');
const test = document.getElementById('test');
const squirrelImg = document.getElementById('squirrelImg');

let clickCount = 0;

button.addEventListener('click', function() {
    clickCount++;

    if (clickCount == 1) {
        test.innerText = "You clicked the button...I told you not to do that.";
    } else if (clickCount == 2) {
        test.innerText = "Again?? Really?? Do you have problems following directions?";
    } else if (clickCount == 3) {
        test.innerText = "If you click that button again...we are going to have problems.";
    } else if (clickCount == 4) {
        test.innerText = "...or I guess I should say that squirrel is going to have problems.";
    } else if (clickCount == 5) {
        test.innerText = "Alright, don't say I didn't warn you.";
    } else {
        test.innerText = "SEE WHAT YOU DID??? You made the squirrel sad. I hope your happy with yourself.";
        squirrelImg.src = "sadSquirrel.jpg";
    }
});