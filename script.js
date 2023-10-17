const btn = document.getElementById('btn');




//입력 값 대조
const sample = document.getElementById('sample');
const inputBox = document.getElementById('text-area');

// sample.style.color = 'red'
const sampleValue = document.getElementById('sample').innerHTML;
// const inputValue = document.getElementById('text-area').value;

const sampleValueSplit = sampleValue.split("");
// const inputValueSplit = inputValue.split("");

// console.log(sampleValueSplit);
// console.log(inputValue); // -> 빈 배열 

//스트링을 array로  -> 일일이 비교 for each 나 map 사용 -> 한번 수정하면 다시 처음으로 가서 비교하기 때문에 loop이 필요함.


inputBox.addEventListener('input', () => {
    sampleValueSplit.forEach((item, index) => {
        // console.log(item, index);
        console.log(sampleValueSplit)

        // 1안 
        // let x  = inputBox.value;
        // console.log(x);
        // console.log(sampleValue)
        // if(x === sampleValue) {
        //     sample.style.color = 'green'
        // }
        //

        // 2안
        let x  = inputBox.value;
        let newArr = x.split("");
        console.log(newArr);
        if(newArr.toString() === sampleValueSplit.toString()) {
            sample.style.color = 'green'
        }
        //


        // 3안
        // console.log(newArr);
        // console.log(newArr[0])
        // console.log(newArr[1])
        // if(newArr[0] === sampleValueSplit[0]) {
        //     sampleValueSplit[0].style.color = 'green'
        // };
        
    });

})












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

btn.addEventListener('click', () => setTimer()); // 익명함수안에 필요한 함수
