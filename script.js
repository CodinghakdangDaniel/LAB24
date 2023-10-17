const btn = document.getElementById('btn');




//입력 값 대조
const sampleValue = document.getElementById('sample');
const inputValue = document.getElementById('text-area');

console.log(sampleValue);
console.log(inputValue.value);

function compareValue() {
    if(sampleValue.value === inputValue.value) {
        sampleValue.style.color = green;
    }
    else {
        sampleValue.style.color = red;
        console.log(sampleValue.style.color)
    }
};

compareValue();





// Timer 
const timer = document.getElementById('timer');
let time = 600000;
let sec= 60;

timer.value = 60;

function setTimer() {
    playTime = setInterval(function(){
        time = time-1000; //1초씩 줄어듬
        
        if(sec > 0) {
            sec = sec-1;
            timer.value = sec;
            // console.log(timer.value);
        }
        if(sec === 0) {
            sec = 60;
            timer.value = 0;
        }
    }, 1000); //1초마다
    // console.log(playTime)
};

btn.addEventListener('click', setTimer());
