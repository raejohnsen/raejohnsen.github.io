function updateTime() {

    let today = new Date();
    
    let thisMonth = today.getMonth();
    let months = ["https://media.baamboozle.com/uploads/images/294354/1668445804_171746_gif-url.gif", 
    "https://lh6.googleusercontent.com/proxy/bPWO1LedPSn23ku5i0q0F8oTmtTeCJshdffxqkvZvwD0-r1XRsND8PtU3vmz1BEhmBlP0Fo-EBHEaU1HhxTzyhNP-oYoIbzyzE2rCAJamUUmkftag6bmJOy7b40jB-NaEQpSzy6ha5zRCPM", 
    "https://i.pinimg.com/originals/11/90/b7/1190b7ee995b30ccb939ead77209b724.gif", 
    "https://s3.amazonaws.com/image.blingee.com/images19/content/output/000/000/000/82e/854770256_154116.gif", 
    "https://lh6.googleusercontent.com/proxy/tKc96kTWVjZF0dJ-Fd3dhOEL5xDICn0qFBNHdg_so_wr2lhSCYVDybA6_y2-YydSW_WSGm7ZI1SeRhwwEYXTnvAAx9shAnsJN02UT45L3z8WyJNr0ch7hjeHewn6kF_p4wHncuJdP1M", 
    "https://lh6.googleusercontent.com/proxy/RbVFaEori0bl6BJdi8LQZ0yzav8KvOIPnOecvAkNPlplc5B13SMGz4EZuBTgNUlHyI8DGT5q0WTveW9fOLSNSvP6QoYXvHJOXL7odQCTZF1c9vOS8CN5pp162u0mLbXmxtJobR9TpBQ", 
    "https://lh3.googleusercontent.com/proxy/wIqvYHmFwakHiqfbt4DGNluSwZgFu-PChzz_DJ9ZfXvTlCvZxhBH6sBuj-I1QRnr6f7WlzH4yaJbZ3RPFhfLQSnPBX6ylR406f8bAaSPMuusXEBucQ5uE7amA0NKrZUIyfIztEyPCAs", 
    "https://i.pinimg.com/originals/c2/bd/bb/c2bdbb8b74d2f191e5baab3f9d1ed80a.gif", 
    "https://lh5.googleusercontent.com/proxy/v2pzGg4-AfXbBPnzveNT_RmOEsWz1V204QCStj8ZFGOuX2-NM6pp7v0QaU1eYpsKrgSKXEkGT3-vnvBLDWSMf3lugxeHYrZ8Vaw6V5AKweEGd5pkGc6WoR0hZXVZbm1Qj92ycWZKrO-bQXU", 
    "https://i.pinimg.com/originals/88/a7/7d/88a77dff5d9caf7a0c1d47a93e7ac47a.gif", 
    "https://lh4.googleusercontent.com/proxy/90Mh5UgaMrO_4v98Av9N-JSp85TsHJvgCozxPoFkBkmRX_WbkZCn2WCegFK87M_dBsgZlN3jjeMsW-PNn-BOBMzCRHKfcsSyNfGV6Ud_s9ZW7JmWTykX4l4kkjLK9KhtfW7ba-5mMdw_", 
    "https://lh6.googleusercontent.com/proxy/_N5klaBzqaSoyLSj8nmyDhZi_xChLQGMOXggBlciIEL6KPs2Ng7ndo0BfmVUIIolbyyVmKQK0Z7Ajbzl4ngKpWNBpz2gCYfPTuY1aocNNnSe2YdoKF9rf3lW_Cj2udgQdicKeaY4CbcOlA"];

    let monthWords = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let monthgif = document.getElementById("monthGif");
    monthgif.src = months[thisMonth];

    let thisDate = today.getDate();

    let thisWeekday = today.getDay();
    let dayGifs = ["https://s3.amazonaws.com/image.blingee.com/images18/content/output/000/000/000/6c7/647497829_2019065.gif", 
    "https://lh4.googleusercontent.com/proxy/VaNc6u-xxplKbYprq_3RkaGhabjr89hJ2oxIpKtQ56g7YN2CtHRvpy33TcOlg9XOgoM4ol2EBYNS98QogmmMsC5P_onUQKwj3v5Ob2UWqfpb1fHhm-phPF61x9oSAlIg7HnPFk5G2tQ", 
    "https://lh6.googleusercontent.com/proxy/F-du-9ysYAO_iMXwuvwOBJuZQg0rc84r_wZ-UuzYJFpAagbKDkye8C6kzIIrkTIT1g3Cca_ls0f7aGTiRZteZVZVioc4EolvGTlIUdKHyKkmIFCV244ZcgEOkm92HrhH0suXfkwKw1k",
    "https://lh5.googleusercontent.com/proxy/JrUWFNP_ROLBA7f_vtRJafHoNp04uHmrn1VJb4AJpbdJDrSAkt-k5GSx4dQPlivY4a5h5E2VC9VpGmbl1ninPfhblQWJliD9IaQUsHW63EI_Mvs9krohiRHAjFEl4w4DFDLROlLCZBh3", 
    "https://lh4.googleusercontent.com/proxy/n6uVX9RlAudNkRb0jrfSN0fu3XKjd8TKWsEH2qhf0N5Rm88OuZVZoc-8QjKT5C2NN2O2rpaFiBy2p35mwvqeMXBs3CHObSviMe6UwlT-HkqyCuZXd0tiQllYCEBDjIaG_9b8", 
    "https://lh5.googleusercontent.com/proxy/d8Ti9gN3GbVHAHOHbqVeNFLXbth0TUaLtM5KAn-gOLekw0zibZxUac-ID0y-pfEEMCcWNoIIc9CRJ9vzba8RZNroGG2zKSmptHzNSh4JnJe3NAY116xxUWv2rnw7s5ffEOeXP63zJArQ", 
    "https://lh5.googleusercontent.com/proxy/uJpOf92IQOmie9KP-O5XDBOAo6Fm4EWiEos3PQB8qIrmjpXk-Xb-QyOmqzUXWQYCuYHgveeptZc_85rXQd6Jpzwil6Jvzzde1m8YFBThLE77CzsOmigci67dIIrR3z2b_wlPI9XmvWdB"];
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let daygif = document.getElementById("dayGif");
    daygif.src = dayGifs[thisWeekday];

    let thisYear = today.getFullYear();

    let dateHere = document.getElementById("dateHere");
    dateHere.innerHTML = days[thisWeekday] + ", " + monthWords[thisMonth] + " " + thisDate + ", " + thisYear

    let thisHour = today.getHours();

    let thisMinute = today.getMinutes();

    let TODgif = document.getElementById("TODGif");

    if (thisHour >= 4 && thisHour < 12) {
        TODgif.src = "https://lh4.googleusercontent.com/proxy/-Ge9b-1-apE2H3BKUz5mAOHBlZ-B4mHPPtqNunwz-ob6ayHX4FDrMEVkbyNQeg_vCCF2vglEBBiNF_F4jfe3MXx8FGoY9svAnuf4d6g-QkXbul_tp0UNjGIebevaR7u5p2gfQKBu7kzv";
        document.body.style.backgroundColor = "white";
    } else if (thisHour >= 12 && thisHour < 18) {
        TODgif.src = "https://lh3.googleusercontent.com/proxy/W27CV2jQBkxIPPDZ_3BYnLa8xOGMhjVKPU1IIpQ4tAbdMdOKj580V6bO2NcRe5Jm1WqjM1dKq13-D-sLSwSbKxMhtb_nJ1E3Kh5gDSMoG4XtI3pVR6YHJGOuBUj9ZPESnnvBENX-yUTxGA";
        document.body.style.backgroundColor = "white";
    } else {
        TODgif.src = "https://lh3.googleusercontent.com/proxy/GLLMjV6fxKxrn6umwuhKpyKmR2rTvvXGE8ljcqDHEpcVHDvSBnRypBZKRuSh4s4QwzTVHFIjKpshzsOUTaEpgubfbupljGXc4hEzpTRue0NHEnjiQpUKmUohWTy-R3SxpNq9rBe0eQQ"
        document.body.style.backgroundColor = "black";
    }

    if(thisMinute < 10) {
        thisMinute = "0" + thisMinute;
    }
        
    if(thisHour < 10) {
        thisHour = "0" + thisHour;
    }
        
    if(thisHour > 12) {
        thisHour = thisHour - 12;
    }

    let timeHere = document.getElementById("timeHere");
    timeHere.innerHTML = thisHour + ":" + thisMinute
}
setInterval(updateTime, 1000);