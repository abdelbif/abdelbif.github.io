"use strict"

const paragraf = document.getElementById("clock");
setInterval(() => {
  const currentTime = getDateTime();
  paragraf.innerHTML = currentTime;
}, 1000);

function getDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
   
    let dateTime = year + "-" 
    + month + "-" + day + "     " 
    + hour + ":" + minute + ":" 
    + second;

    return dateTime;
  }

 