// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/more-pratice-with-promises

function job(data) {
    return new Promise(function(resolve, reject){
        if (isNaN(data)){
            reject("error");
        }
        else if(data %2 != 0){
            setTimeout(function(){
                resolve("odd")
            },1000);
        }
        else{
            setTimeout(function(){
                reject("even")
            },2000);  
        }
    })
}
module.exports = job;