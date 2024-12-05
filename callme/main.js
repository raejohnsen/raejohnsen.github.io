let images = [
    'sources/acme.png',
    'sources/yellowswatch.png',
    'sources/keychain.png',
    'sources/aftersun.png',
    'sources/snoopy.png',
    'sources/alberts.png',
    'sources/amplehills.png',
    'sources/amplehills1.png',
    'sources/antons.png',
    'sources/asteroid1.png',
    'sources/asteroid2.png',
    'sources/asteroid3.png',
    'sources/asteroid4.png',
    'sources/barneys.png',
    'sources/bayou.png',
    'sources/bayou2.png',
    'sources/bestyet.png',
    'sources/bigbar.png',
    'sources/bilbo.png',
    'sources/bisqueswatch.png',
    'sources/bkbrewery.png',
    'sources/blackswatch.png',
    'sources/blazes.png',
    'sources/broom.png',
    'sources/broomest.png',
    'sources/bubblegumswatch.png',
    'sources/cat.png',
    'sources/clasicos.png',
    'sources/coffee.png',
    'sources/confetti.png',
    'sources/conti.png',
    'sources/crab.png',
    'sources/crazyhorse.png',
    'sources/dantanas.png',
    'sources/dba.png',
    'sources/dressler.png',
    'sources/erech.png',
    'sources/estrus.png',
    'sources/fez.png',
    'sources/fightergroup.png',
    'sources/flamingo.png',
    'sources/fluoorangeswatch.png',
    'sources/fonda.png',
    'sources/fortune.png',
    'sources/freemans.png',
    'sources/gage.png',
    'sources/gallaghers.png',
    'sources/glossier.png',
    'sources/goodles.png',
    'sources/governors.png',
    'sources/gramercy.png',
    'sources/greenswatch.png',
    'sources/gueros.png',
    'sources/hala.png',
    'sources/howitzer.png',
    'sources/indochine.png',
    'sources/k.png',
    'sources/kellygreenswatch.png',
    'sources/keychain.png',
    'sources/koolhaasfront.png',
    'sources/lafittes.png',
    'sources/lamb.png',
    'sources/landmark.png',
    'sources/limeswatch.png',
    'sources/lindas.png',
    'sources/lottery.png',
    'sources/maikai.png',
    'sources/mcgoverns.png',
    'sources/midcitylanes.png',
    'sources/mintswatch.png',
    'sources/MR.png',
    'sources/nadines.png',
    'sources/orchestra.png',
    'sources/pao.png',
    'sources/pousadas.png',
    'sources/pulitzer.png',
    'sources/qatar.png',
    'sources/redhooktav.png',
    'sources/ribbon.png',
    'sources/screeningroom.png',
    'sources/sealscove.png',
    'sources/shell.png',
    'sources/sisters.png',
    'sources/skull.png',
    'sources/sticker.png',
    'sources/studs.png',
    'sources/sue.png',
    'sources/sumi.png',
    'sources/sunkenharbor.png',
    'sources/tape.png',
    'sources/tattoo.png',
    'sources/tomato.png',
    'sources/trattoria.png',
    'sources/trophy.png',
    'sources/tube.png',
    'sources/turks.png',
    'sources/twoboots.png',
    'sources/uno.png',
    'sources/valentine2.png',
    'sources/wrigley.png',
    'sources/wristband.png',
    'sources/wristband2.png',
    'sources/wristband3.png',
    'sources/yellowswatch.png',
    'sources/activator.png'
];

let idleTime = 0;
let afkInterval = null;

// Update #hero image every second
function updateHeroImage() {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const randomIndex = Math.floor(Math.random() * images.length);
    hero.src = images[randomIndex];
}

// Function to create a random image element and append it to the body
function createRandomImage() {
    const img = document.createElement("img");
    img.src = images[Math.floor(Math.random() * images.length)];
    img.style.position = "absolute";
    img.style.top = Math.random() * window.innerHeight + "px";
    img.style.left = Math.random() * window.innerWidth + "px";
    img.style.width = "150px"; // Adjust as needed
    img.style.height = "auto"; // Maintain aspect ratio
    img.style.zIndex = 9999; // Ensure it appears above other elements

    document.body.appendChild(img);
}

// Function to clear all images from the body
function clearAllImages() {
    document.querySelectorAll("img").forEach(img => {
        if (!img.id || img.id !== "hero") {
            img.remove();
        }
    });
}

// Function to start the random image popping (AFK mode)
function startAfkMode() {
    if (afkInterval) return; // Avoid multiple intervals
    afkInterval = setInterval(createRandomImage, 2000); // Every 2 seconds
}

// Function to stop the random image popping
function stopAfkMode() {
    if (afkInterval) {
        clearInterval(afkInterval);
        afkInterval = null;
    }
    clearAllImages(); // Clear all images when stopping AFK mode
}

// Reset idle timer on user activity
function resetIdleTimer() {
    idleTime = 0;
    stopAfkMode();
}

// Increment the idle time every second
setInterval(() => {
    idleTime++;
    if (idleTime >= 30) { // 30 seconds of inactivity
        startAfkMode();
    }
}, 1000);

// Attach event listeners to detect user activity
["mousemove", "keypress", "scroll", "click", "touchstart"].forEach(event => {
    document.addEventListener(event, resetIdleTimer);
});

// Start updating the #hero image every second
setInterval(updateHeroImage, 1000);
