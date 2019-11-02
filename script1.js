let birthday = new Date("Nov 8, 2019 00:00:00").getTime();
let timer = () => {
    setInterval( () =>{
        let now = new Date().getTime();
        let timeLeft = birthday - now;
        let days = Math.floor(timeLeft/(1000* 60* 60 *24));
        let hours = Math.floor((timeLeft%(1000* 60* 60* 24))/(1000* 60* 60));
        let mins =  Math.floor((timeLeft%(1000* 60* 60))/(1000 * 60));
        let secs = Math.floor((timeLeft%(1000* 60))/(1000));
        let msec = Math.floor(timeLeft%1000);
        document.getElementById("div1").innerHTML=days;
        document.getElementById("div2").innerHTML=hours;
        document.getElementById("div3").innerHTML=mins;
        document.getElementById("div4").innerHTML=secs;
    },100)
}
timer();
