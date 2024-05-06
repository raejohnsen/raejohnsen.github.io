function updateTime() {
    document.getElementById('button').addEventListener('mouseover', function() {
        let aboutElement = document.getElementById('about');
        aboutElement.classList.remove('disappear');
        aboutElement.classList.add('appear');
    });
    
    document.getElementById('button').addEventListener('mouseout', function() {
        let aboutElement = document.getElementById('about');
        aboutElement.classList.remove('appear');
        aboutElement.classList.add('disappear');
    });

    

    // Selecting elements with class "h1square"
    let hour1Squares = document.getElementsByClassName("h1square");
    let hour2Squares = document.getElementsByClassName("h2square");
    let min1Squares = document.getElementsByClassName("min1square");
    let min2Squares = document.getElementsByClassName("min2square");
    let sec1Squares = document.getElementsByClassName("sec1square");
    let sec2Squares = document.getElementsByClassName("sec2square");

    let today = new Date();
    let thisHour = today.getHours();
    let thisMinute = today.getMinutes();
    let thisSecond = today.getSeconds();

    let timeElem = document.getElementById("timeHere");

    if (thisHour >= 6 && thisHour < 18) {
        document.body.style.backgroundColor = "white";
        timeElem.style.color = "black";
        document.getElementById('button').style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        timeElem.style.color = "white";
        document.getElementById('button').style.color = "white";
    }



    // Selecting the number of divs to fill based on the first digit of the hour
    let numOfDivsHr1 = parseInt(thisHour.toString()[0]);
    let numOfDivsMin1 = parseInt(thisMinute.toString()[0]);
    let numOfDivsSec1 = parseInt(thisSecond.toString()[0]);
    let numOfDivsHr2 = parseInt(thisHour.toString()[1]);
    let numOfDivsMin2 = parseInt(thisMinute.toString()[1]);
    let numOfDivsSec2 = parseInt(thisSecond.toString()[1]);



    // Random colors
    let colors = ["#ff0040", "#00d170", "#00ebd7", "#00a2ff", "#003cff", "#7940ff", "#32008a", "#ff45e3", "#ff0084", "#ACEAFF", "#EAFFAC", "#ACFFEC", "#ACC9FF", "#BBFF81", "#815AFF"];
    
    let randomColor1 = Math.floor(Math.random() * colors.length);
    let randomColor2 = Math.floor(Math.random() * colors.length);
    let randomColor3 = Math.floor(Math.random() * colors.length);
    let randomColor4 = Math.floor(Math.random() * colors.length);
    let randomColor5 = Math.floor(Math.random() * colors.length);
    let randomColor6 = Math.floor(Math.random() * colors.length);



    // Filling random divs
    for (let i = 0; i < numOfDivsHr1; i++) {
        let randomIndex = Math.floor(Math.random() * hour1Squares.length);
        hour1Squares[randomIndex].classList.add('filled');

        for(let square of hour1Squares) {
            if(square.classList.contains("filled")) {
                square.style.backgroundColor = colors[randomColor1];
            } else if (square.classList.contains("filled") == false && thisHour >= 6 && thisHour < 18){
                square.style.backgroundColor = "white";
            } else if (square.classList.contains("filled") == false){
                square.style.backgroundColor = "black";
            }
        }
    }

    for (let i = 0; i < numOfDivsHr2; i++) {
        let randomIndex = Math.floor(Math.random() * hour2Squares.length);
        hour2Squares[randomIndex].classList.add('filled');

        for(let square of hour2Squares) {
            if(square.classList.contains("filled")) {
                square.style.backgroundColor = colors[randomColor2];
            } else if (square.classList.contains("filled") == false && thisHour >= 6 && thisHour < 18){
                square.style.backgroundColor = "white";
            } else if (square.classList.contains("filled") == false){
                square.style.backgroundColor = "black";
            }
        }
    }

    for (let i = 0; i < parseInt(thisMinute.toString()[0]); i++) {
        let randomIndex = Math.floor(Math.random() * min1Squares.length);
        min1Squares[randomIndex].classList.add('filled');

        for(let square of min1Squares) {
            if(square.classList.contains("filled")) {
                square.style.backgroundColor = colors[randomColor3];
            } else if (square.classList.contains("filled") == false && thisHour >= 6 && thisHour < 18){
                square.style.backgroundColor = "white";
            } else if (square.classList.contains("filled") == false){
                square.style.backgroundColor = "black";
            }
        }
    }

    for (let i = 0; i < parseInt(thisMinute.toString()[1]); i++) {
        let randomIndex = Math.floor(Math.random() * min2Squares.length);
        min2Squares[randomIndex].classList.add('filled');

        for(let square of min2Squares) {
            if(square.classList.contains("filled")) {
                square.style.backgroundColor = colors[randomColor4];
            } else if (square.classList.contains("filled") == false && thisHour >= 6 && thisHour < 18){
                square.style.backgroundColor = "white";
            } else if (square.classList.contains("filled") == false){
                square.style.backgroundColor = "black";
            }
        }
    }

    for (let i = 0; i < numOfDivsSec1; i++) {
        let randomIndex = Math.floor(Math.random() * sec1Squares.length);
        sec1Squares[randomIndex].classList.add('filled');

        for(let square of sec1Squares) {
            if(square.classList.contains("filled")) {
                square.style.backgroundColor = colors[randomColor5];
            } else if (square.classList.contains("filled") == false && thisHour >= 6 && thisHour < 18){
                square.style.backgroundColor = "white";
            } else if (square.classList.contains("filled") == false){
                square.style.backgroundColor = "black";
            }
        }
    }
    
    for (let i = 0; i < numOfDivsSec2; i++) {
        let randomIndex = Math.floor(Math.random() * sec2Squares.length);
        sec2Squares[randomIndex].classList.add('filled');

        for(let square of sec2Squares) {
            if(square.classList.contains("filled")) {
                square.style.backgroundColor = colors[randomColor6];
            } else if (square.classList.contains("filled") == false && thisHour >= 6 && thisHour < 18){
                square.style.backgroundColor = "white";
            } else if (square.classList.contains("filled") == false){
                square.style.backgroundColor = "black";
            }
        }
    }

    // if(thisHour == 0){
    //     thisHour = "12";
    // }

    // if(thisHour == 13){
    //     thisHour = "1";
    // }

    // if (thisHour == 10) {
    //     thisHour = "10";
    // }

    // if (thisHour == 18) {
    //     thisHour = "6";
    // }

    // if (thisSecond < 10) {
    //     thisSecond = "0" + thisSecond;
    // }

    // if (thisMinute < 10) {
    //     thisMinute = "0" + thisMinute;
    // }


    if (thisHour > 12) {
        thisHour = thisHour - 12;
    }

    if(thisHour < 10) {
        thisHour = "0" + thisHour;
    }

    if(thisMinute < 10) {
        thisMinute = "0" + thisMinute;
    }

    if(thisSecond < 10) {
        thisSecond = "0 "+ thisSecond;
    }

    console.log(thisSecond);



    // timeElem.innerHTML = thisHour + ":" + thisMinute + ":" + thisSecond;


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

} setInterval(updateTime, 1000);

// function updateTime() {
//     document.getElementById('button').addEventListener('mouseover', function() {
//         let aboutElement = document.getElementById('about');
//         aboutElement.classList.remove('disappear');
//         aboutElement.classList.add('appear');
//     });
    
//     document.getElementById('button').addEventListener('mouseout', function() {
//         let aboutElement = document.getElementById('about');
//         aboutElement.classList.remove('appear');
//         aboutElement.classList.add('disappear');
//     });

//     let today = new Date();
//     let thisHour = today.getHours();
//     let thisMinute = today.getMinutes();
//     let thisSecond = today.getSeconds();

//     let timeElem = document.getElementById("timeHere");



//     // if (thisHour >= 6 && thisHour < 18) {
//     //     document.body.style.backgroundColor = "white";
//     //     timeElem.style.color = "black";
//     //     document.getElementById('button').style.color = "black";
//     // } else {
//     //     document.body.style.backgroundColor = "black";
//     //     timeElem.style.color = "white";
//     //     document.getElementById('button').style.color = "white";
//     // }





//     // Selecting elements with class "h1square"
//     let hour1Squares = document.getElementsByClassName("h1square");
//     let hour2Squares = document.getElementsByClassName("h2square");
//     let min1Squares = document.getElementsByClassName("min1square");
//     let min2Squares = document.getElementsByClassName("min2square");
//     let sec1Squares = document.getElementsByClassName("sec1square");
//     let sec2Squares = document.getElementsByClassName("sec2square");



//     // Selecting the number of divs to fill based on the first digit of the hour
//     let numOfDivsHr1 = parseInt(thisHour.toString()[0]);
//     let numOfDivsMin1 = parseInt(thisMinute.toString()[0]);
//     let numOfDivsSec1 = parseInt(thisSecond.toString()[0]);
//     let numOfDivsHr2 = parseInt(thisHour.toString()[1]);
//     let numOfDivsMin2 = parseInt(thisMinute.toString()[1]);
//     let numOfDivsSec2 = parseInt(thisSecond.toString()[1]);

//     // let otherColors = ["orange", "yellow", "pink"]

//     // if (numOfDivsSec1 == 0){
//     //     for(let square of sec1Squares) {
//     //     square.style.backgroundColor = otherColors[Math.floor(Math.random() * otherColors.length)];
//     // }}

//     // Random colors
//     let colors = ["#ff0040", "#00d170", "#00ebd7", "#00a2ff", "#003cff", "#7940ff", "#32008a", "#ff45e3", "#ff0084"];
    
//     let randomColor1 = Math.floor(Math.random() * colors.length);
//     let randomColor2 = Math.floor(Math.random() * colors.length);
//     let randomColor3 = Math.floor(Math.random() * colors.length);
//     let randomColor4 = Math.floor(Math.random() * colors.length);
//     let randomColor5 = Math.floor(Math.random() * colors.length);
//     let randomColor6 = Math.floor(Math.random() * colors.length);



//     // Filling random divs
//     for (let i = 0; i < numOfDivsHr1; i++) {
//         let randomIndex = Math.floor(Math.random() * hour1Squares.length);
//         hour1Squares[randomIndex].classList.add('filled');

//         for(let square of hour1Squares) {
//             let thisHour = today.getHours();
//             if(square.classList.contains("filled")) {
//                 // If square has class "filled", assign a random background color
//                 square.style.backgroundColor = colors[randomColor1];
//             }
        
//             // if (!square.classList.contains("filled") && thisHour >= 6 && thisHour < 18) {
//             // // If square doesn't have class "filled" and it's daytime (6am to 6pm), assign white background
//             //     square.style.backgroundColor = "white";
//             // }

//             // if (!square.classList.contains("filled") && thisHour <= 6 && thisHour > 18){
//             // // If square doesn't have class "filled" and it's nighttime (6pm to 6am), assign black background
//             //     square.style.backgroundColor = "black";
//             // }


//             if (thisHour >= 6 && thisHour < 18) {
//                 document.body.style.backgroundColor = "white";
//                 timeElem.style.color = "black";
//                 document.getElementById('button').style.color = "black";
//                 square.style.backgroundColor = "white";
//             } else {
//                 document.body.style.backgroundColor = "black";
//                 timeElem.style.color = "white";
//                 document.getElementById('button').style.color = "white";
//                 square.style.backgroundColor = "black";
//             }
//         }
//     }

//     for (let i = 0; i < numOfDivsMin1; i++) {
//         let randomIndex = Math.floor(Math.random() * min1Squares.length);
//         min1Squares[randomIndex].classList.add('filled');

//         for(let square of min1Squares) {
//             if(square.classList.contains("filled")) {
//                 square.style.backgroundColor = colors[randomColor2];
//             } else if (!square.classList.contains("filled") && thisHour >= 6 && thisHour < 18){
//                 square.style.backgroundColor = "white";
//             } else if (!square.classList.contains("filled") && thisHour <= 6 && thisHour > 18){
//                 square.style.backgroundColor = "black";
//             }
//         }
//     }

//     for (let i = 0; i < numOfDivsSec1; i++) {
//         let randomIndex = Math.floor(Math.random() * sec1Squares.length);
//         sec1Squares[randomIndex].classList.add('filled');

//         for(let square of sec1Squares) {
//             if(square.classList.contains("filled")) {
//                 square.style.backgroundColor = colors[randomColor3];
//             } else if (!square.classList.contains("filled") && thisHour >= 6 && thisHour < 18){
//                 square.style.backgroundColor = "white";
//             } else if (!square.classList.contains("filled") && thisHour <= 6 && thisHour > 18){
//                 square.style.backgroundColor = "black";
//             }
//         }}
    

//     for (let i = 0; i < numOfDivsHr2; i++) {
//         let randomIndex = Math.floor(Math.random() * hour2Squares.length);
//         hour2Squares[randomIndex].classList.add('filled');

//         for(let square of hour2Squares) {
//             if(square.classList.contains("filled")) {
//                 square.style.backgroundColor = colors[randomColor4];
//                 // square.style.opacity = Math.random() * (1 - 0.4) + 0.4;
//             } else if (!square.classList.contains("filled") && thisHour >= 6 && thisHour < 18){
//                 square.style.backgroundColor = "white";
//             } else if (!square.classList.contains("filled") && thisHour <= 6 && thisHour > 18){
//                 square.style.backgroundColor = "black";
//             }
//         }
//     }

//     for (let i = 0; i < numOfDivsMin2; i++) {
//         let randomIndex = Math.floor(Math.random() * min2Squares.length);
//         min2Squares[randomIndex].classList.add('filled');

//         for(let square of min2Squares) {
//             if(square.classList.contains("filled")) {
//                 square.style.backgroundColor = colors[randomColor5];
//                 // square.style.opacity = Math.random() * (1 - 0.4) + 0.4;
//             } else if (!square.classList.contains("filled") && thisHour >= 6 && thisHour < 18){
//                 square.style.backgroundColor = "white";
//             } else if (!square.classList.contains("filled") && thisHour <= 6 && thisHour > 18){
//                 square.style.backgroundColor = "black";
//             }
//         }
//     }
    
//     for (let i = 0; i < numOfDivsSec2; i++) {
//         let randomIndex = Math.floor(Math.random() * sec2Squares.length);
//         sec2Squares[randomIndex].classList.add('filled');

//         for(let square of sec2Squares) {
//             if(square.classList.contains("filled")) {
//                 square.style.backgroundColor = colors[randomColor6];
//                 // square.style.opacity = Math.random() * (1 - 0.4) + 0.4;
//             } else if (!square.classList.contains("filled") && thisHour >= 6 && thisHour < 18){
//                 square.style.backgroundColor = "white";
//             } else if (!square.classList.contains("filled") && thisHour <= 6 && thisHour > 18){
//                 square.style.backgroundColor = "black";
//             }
//         }
//     }

//     if (thisSecond < 10) {
//         thisSecond = "0" + thisSecond;
//     }

//     if (thisMinute < 10) {
//         thisMinute = "0" + thisMinute;
//     }

//     if (thisHour > 12) {
//         thisHour = thisHour - 12;
//     }

//     if(thisHour < 10) {
//         thisHour = "0" + thisHour;
//     }

//     if(thisHour == 0){
//         thisHour = "12";
//     }

//                 timeElem.innerHTML = thisHour + ":" + thisMinute + ":" + thisSecond;



//     // Clearing previous filled squares
//     for (let square of hour1Squares) {
//         square.classList.remove('filled');
//     }

//     for (let square of hour2Squares) {
//         square.classList.remove('filled');
//     }

//     for (let square of min1Squares) {
//         square.classList.remove('filled');
//     }

//     for (let square of min2Squares) {
//         square.classList.remove('filled');
//     }

//     for (let square of sec1Squares) {
//         square.classList.remove('filled');
//     }

//     for (let square of sec2Squares) {
//         square.classList.remove('filled');
//     }

// } setInterval(updateTime, 1000);
