
// Menunjukan waktu sekarang 
showTime = () => {
    let clock = document.getElementById("clock");
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridian = 'AM';

    if( minutes < 10 ) {
        minutes = "0" + minutes;
    } 
    
    if( seconds < 10 ) {
        seconds = "0" + seconds;
    }
    
    if( hours < 10 ) {
        hours = "0" + hours;
    }

    if( hours >= 12 ) {
        meridian = 'PM';
    }
    
    if( hours > 12 ) {
        hours -= 12;
    }
    
    clock.innerHTML = hours + ":" + minutes + ":" + seconds + meridian;
}
// Alarm + Update clock
let reminder = document.querySelector('.remind-button');
let tagTime = document.getElementById('tagTime');

reminder.addEventListener('click', function() {
    let remind = document.getElementById('remind');
    remind.classList.toggle('empty'); 
    if( remind.classList.contains('empty') ) {
        result.innerHTML = '';
        tagTime.value = '';
        oraOraOra.classList.add('empty');
    } else {
        palaceLived.classList.add('empty');
        result.innerHTML = '';
        dateTime.value = '';
        startTime.value = '';
    }
})
// reminder

let oraOraOra = document.querySelector('.oraora');
let oraSound = new Audio('oraora.mp3');
let reminded = () => {
    let hours2 = new Date().getHours();
    let minutes2 = new Date().getMinutes();
    if( hours2 + ':' + minutes2 == tagTime.value ) {
        result.innerHTML = 'Hey wake up!';
        oraOraOra.classList.remove('empty');
        oraSound.play();
    }

    showTime();
}
reminded();

let interval = setInterval(reminded, 1000)

let result = document.getElementById('result');

// Jarak waktu hidup

let lived = document.querySelector('.live');
let palaceLived = document.getElementById('palaceLive');
let dateTime = document.getElementById("dateTime");
let startTime = document.getElementById("timeStart");

// toggle variabel lived
lived.addEventListener('click', function() {
    
    palaceLived.classList.toggle('empty');
    if (palaceLived.classList.contains('empty')) {
        result.innerHTML = '';
        dateTime.value = '';
        startTime.value = '';
    } else {
        remind.classList.add('empty');
        tagTime.value = ''
        result.innerHTML = '';
        oraOraOra.classList.add('empty');
    }

})

let zaWarudo = document.querySelector('.zawarudo');
let zaWarudoSound = new Audio('Za Warudo.mp4');
// functions hasil waktu
function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }

async function chooseDate() {  
    // buat waktu 
    let secondz = Math.floor((startTime.valueAsNumber - dateTime.valueAsNumber ) / 1000);
    let minutez = Math.floor((startTime.valueAsNumber - dateTime.valueAsNumber ) / 1000 / 60);
    let hourz = Math.floor((startTime.valueAsNumber - dateTime.valueAsNumber ) / 1000 / 3600);
    let dayz = Math.floor((startTime.valueAsNumber - dateTime.valueAsNumber ) / 1000 / 3600 / 24);
    let weekz = Math.floor((startTime.valueAsNumber - dateTime.valueAsNumber ) / 1000 / 3600 / 24 / 7);
    let monthz = Math.floor((startTime.valueAsNumber - dateTime.valueAsNumber ) / 1000 / 3600 / 24 / 30.4);
    let yearz = Math.floor((startTime.valueAsNumber - dateTime.valueAsNumber ) / 1000 / 3600 / 24 / 365);
    
    result.innerHTML = '';
    console.log(interval);
    clearInterval(interval);
    zaWarudoSound.play();
    zaWarudo.classList.remove('empty');
    await sleep(2800);
    zaWarudo.classList.add('empty');
    interval = setInterval(reminded, 1000);
        return result.innerHTML ="<p>You have lived for...</p> <br>" + secondz + " second <br>" + minutez + " minute <br>" + hourz + " hour <br>" + dayz + " day <br>" + weekz + " week <br>" + monthz + " month <br>" + yearz + " year <br>"; 
    
    


}

let submit = document.getElementById('submit');

submit.addEventListener('click', chooseDate);


