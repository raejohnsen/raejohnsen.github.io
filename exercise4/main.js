function replaceWords(){
let seasons = ["autumn", "winter", "spring"];
let lovelys = ["pretty", "sweet", "gorgeous", "cute"];
let temperates = ["mild", "gentle", "pleasant", "benign"];
let shakes = ["jostle", "tremble", "quake", "quiver"];
let months = ["September", "October", "November", "December", "January", "February", "March", "April", "May", "June", "July", "August"];
let hots = ["warm", "sweltering", "scorching", "humid"];
let complexions = ["skin", "face", "visage", "disposition"];
let declines = ["reduces", "decreases", "lessens", "dwindles"];
let chances = ["providence", "destiny", "fate", "odds"];
let loses = ["misplace", "mislay", "be deprived of", "stop having"];
let brags = ["boast", "show off", "gloat", "swank"];
let eternals = ["infinite", "immortal", "everlasting", "perpetual"];
let men = ["guys", "fellows", "mankind", "humanity"];
let eyes = ["peepers", "orbs", "eyeballs", "optics"];
let thises = ["that", "this"];



let blank1 = document.getElementById('season');
let blank2 = document.getElementById('lovely');
let blank3 = document.getElementById('temperate');
let blank4 = document.getElementById('shake');
let blank5 = document.getElementById('month');
let blank6 = document.getElementById('season2');
let blank7 = document.getElementById('hot');
let blank8 = document.getElementById('complexion');
let blank9 = document.getElementById('declines');
let blank10 = document.getElementById('chance');
let blank11 = document.getElementById('season3');
let blank12 = document.getElementById('lose');
let blank13 = document.getElementById('brag');
let blank14 = document.getElementById('eternal');
let blank15 = document.getElementById('men');
let blank16 = document.getElementById('eyes');
let blank17 = document.getElementById('this');
let blank18 = document.getElementById('this2');



let randomSeason = Math.floor(Math.random() * seasons.length);
let randomLovely = Math.floor(Math.random() * lovelys.length);
let randomTemperate = Math.floor(Math.random() * temperates.length);
let randomShake = Math.floor(Math.random() * shakes.length);
let randomMonth = Math.floor(Math.random() * months.length);
let randomHot = Math.floor(Math.random() * hots.length);
let randomComplexion = Math.floor(Math.random() * complexions.length);
let randomDeclines = Math.floor(Math.random() * declines.length);
let randomChance = Math.floor(Math.random() * chances.length);
let randomLose = Math.floor(Math.random() * loses.length);
let randomBrag = Math.floor(Math.random() * brags.length);
let randomEternal = Math.floor(Math.random() * eternals.length);
let randomMen = Math.floor(Math.random() * men.length);
let randomEyes = Math.floor(Math.random() * eyes.length);
let randomThis = Math.floor(Math.random() * thises.length);
blank1.innerHTML = " " + seasons[randomSeason];
blank2.innerHTML = " " + lovelys[randomLovely];
blank3.innerHTML = " " + temperates[randomTemperate];
blank4.innerHTML = " " + shakes[randomShake];
blank5.innerHTML = " " + months[randomMonth];
blank6.innerHTML = " " + seasons[randomSeason];
blank7.innerHTML = " " + hots[randomHot];
blank8.innerHTML = " " + complexions[randomComplexion];
blank9.innerHTML = " " + declines[randomDeclines];
blank10.innerHTML = " " + chances[randomChance];
blank11.innerHTML = " " + seasons[randomSeason];
blank12.innerHTML = " " + loses[randomLose];
blank13.innerHTML = " " + brags[randomBrag];
blank14.innerHTML = " " + eternals[randomEternal];
blank15.innerHTML = " " + men[randomMen];
blank16.innerHTML = " " + eyes[randomEyes];
blank17.innerHTML = " " + thises[randomThis];
blank18.innerHTML = " " + thises[randomThis];
}

window.onload = replaceWords;