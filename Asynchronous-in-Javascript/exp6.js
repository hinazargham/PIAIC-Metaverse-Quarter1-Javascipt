
// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/some-pratice


function job(callback1, callback2) {
    setTimeout(callback1, 2000);

    let counter = 1;
    let timer = setInterval(function (){
        callback2()
    if (counter >= 3){
        clearInterval(timer)
    }
    counter ++;
    }, 1000);
  
}
module.exports = job;