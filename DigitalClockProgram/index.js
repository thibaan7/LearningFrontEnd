function updateClock(){
const now=new Date();
let hours=now.getHours();
let meridian= hours>=12? "PM": "AM" ;
hours=hours>12? hours-12:hours;
hours=hours===0? 12:hours;






const mins=now.getMinutes().toString().padStart(2,0);
const secs=now.getSeconds().toString().padStart(2,0);
hours=hours.toString().padStart(2,0)
const time= `${hours}:${mins}:${secs} ${meridian}`;

document.getElementById("clock").textContent=time;



}

updateClock();
setInterval(updateClock,1000);