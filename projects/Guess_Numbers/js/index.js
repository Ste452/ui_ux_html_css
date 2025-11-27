function openNav() {
    document.getElementById("imySideBar").style.width = "350px";
    document.body.style.marginLeft = "350px";
    document.body.style.backgroundImage = "";
}

function closeNav() {
    document.getElementById("imySideBar").style.width = "0";
    document.body.style.marginLeft = "0";
    document.body.style.backgroundColor =  "#223240";
}

function guessNumber() {
    var possibilities = document.querySelector("button").values;
    var correctNumber = Math.random(100);
    
    do {



    } while (possibilities != correctNumber);
}

function refactorGame() {
    document.querySelector("button").values;
}

function callAllFunctions() {
    guessNumber();
    refactorNumber();
}