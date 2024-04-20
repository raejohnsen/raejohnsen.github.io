// function updateTime(){

//     let today = new Date();
//     let thisHour = today.getHours();
//     let thisMinute = today.getMinutes();
//     let thisSecond = today.getSeconds();

//     if(thisSecond < 10) {
//         thisSecond = "0" + thisSecond;
//     }
        
//       if(thisMinute < 10) {
//         thisMinute = "0" + thisMinute;
//     }



//     let timeElem = document.getElementById("timeHere");
//     timeElem.innerHTML = thisHour + ":" + thisMinute + ":" + thisSecond;

//     let hour1 = document.getElementsByClassName("h1square");
//     let hour2 = document.getElementsByClassName("hour2");
//     let minute1 = document.getElementsByClassName("min1");
//     let minute2 = document.getElementsByClassName("min2");
//     let second1 = document.getElementsByClassName("sec1");
//     let second2 = document.getElementsByClassName("sec2");

//     let randomId = Math.floor(Math.ramdom() * (114 - 1 + 1) + 1);
//     let numOfDivs = thisHour;

//     for (var i = 0; i < numOfDivs; i++) {
//         var randomIndex = Math.floor(Math.random() * hour1.length);
//         hour1[randomIndex].classList.add('filled');


        
// }

// setInterval(updateTime, 1000);}

function updateTime() {
    
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
        thisHour = thisHour;
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
        filled.style.backgroundColor = colors[randomColor];
    }




}

setInterval(updateTime, 1000);