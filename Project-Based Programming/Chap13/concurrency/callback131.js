setTimeout(() => {
    console.log("Hello")
}, 3000);

setInterval(() => {
    console.log("Hello")
    
}, 1000); //after every 1000 sec

const hello = () => console.log("As-Salaam-Alaikum ")

setInterval(hello, 2000)