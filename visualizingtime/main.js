function updateTime() {
    let columns = document.getElementsByClassName("column");
    let outer = document.getElementsByClassName("outer");

    

    columns.onmouseover = function(){
        columns.style.borderRight = "1px black solid";
    }

    let today = new Date();
    let thisHour = today.getHours();
    let thisMinute = today.getMinutes();
    let thisSecond = today.getSeconds();

    if (thisSecond < 10) {
        thisSecond = "0" + thisSecond;
    }

    if (thisMinute < 10) {
        thisMinute = "0" + thisMinute;
    }

    if (thisHour > 12) {
        thisHour = thisHour - 12;
    }

    if(thisHour < 10) {
        thisHour = "0" + thisHour;
    }

    if(thisHour == 0){
        thisHour = "12";
    }

    let timeElem = document.getElementById("timeHere");
    timeElem.innerHTML = thisHour + ":" + thisMinute + ":" + thisSecond;




    // Selecting elements with class "h1square"
    let hour1Squares = document.getElementsByClassName("h1square");
    let hour2Squares = document.getElementsByClassName("h2square");
    let min1Squares = document.getElementsByClassName("min1square");
    let min2Squares = document.getElementsByClassName("min2square");
    let sec1Squares = document.getElementsByClassName("sec1square");
    let sec2Squares = document.getElementsByClassName("sec2square");
    let filled = document.getElementsByClassName("filled");



    // Clearing previous filled squares
    for (let square of hour1Squares) {
        square.classList.remove('filled');
    }

    for (let square of hour2Squares) {
        square.classList.remove('filled');
    }

    for (let square of min1Squares) {
        square.classList.remove('filled');
    }

    for (let square of min2Squares) {
        square.classList.remove('filled');
    }

    for (let square of sec1Squares) {
        square.classList.remove('filled');
    }

    for (let square of sec2Squares) {
        square.classList.remove('filled');
    }



    // Selecting the number of divs to fill based on the first digit of the hour
    let numOfDivsHr1 = parseInt(thisHour.toString()[0]);
    let numOfDivsMin1 = parseInt(thisMinute.toString()[0]);
    let numOfDivsSec1 = parseInt(thisSecond.toString()[0]);




    // Filling random divs
    for (let i = 0; i < numOfDivsHr1; i++) {
        let randomIndex = Math.floor(Math.random() * hour1Squares.length);
        hour1Squares[randomIndex].classList.add('filled');
    }

    for (let i = 0; i < numOfDivsMin1; i++) {
        let randomIndex = Math.floor(Math.random() * min1Squares.length);
        min1Squares[randomIndex].classList.add('filled');
    }

    for (let i = 0; i < numOfDivsSec1; i++) {
        let randomIndex = Math.floor(Math.random() * sec1Squares.length);
        sec1Squares[randomIndex].classList.add('filled');
    }

    // Selecting the number of divs to fill based on the second digit of the hour
    let numOfDivsHr2 = parseInt(thisHour.toString()[1]);
    let numOfDivsMin2 = parseInt(thisMinute.toString()[1]);
    let numOfDivsSec2 = parseInt(thisSecond.toString()[1]);

    // Filling random divs
    for (let i = 0; i < numOfDivsHr2; i++) {
        let randomIndex = Math.floor(Math.random() * hour2Squares.length);
        hour2Squares[randomIndex].classList.add('filled');
    }

    for (let i = 0; i < numOfDivsMin2; i++) {
        let randomIndex = Math.floor(Math.random() * min2Squares.length);
        min2Squares[randomIndex].classList.add('filled');
    }
    
    for (let i = 0; i < numOfDivsSec2; i++) {
        let randomIndex = Math.floor(Math.random() * sec2Squares.length);
        sec2Squares[randomIndex].classList.add('filled');
    }

    let colors = ["blue", "pink", "green"];
    let randomColor = Math.floor(Math.random() * colors.length);
    filled.style.backgroundColor = colors[randomColor];

}

setInterval(updateTime, 1000);