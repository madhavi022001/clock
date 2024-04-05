let hour=document.getElementById("hours");
let minute=document.getElementById("minutes");
let second=document.getElementById("seconds");
let ampm=document.getElementById("ampm");

function updateClock(){
    let hours=new Date().getHours();
    let minutes=new Date().getMinutes();
    let seconds=new Date().getSeconds();

    // console.log(Date())

    let ampm1="AM";
    if(hours>=12){
        ampm1="PM";

    }
    hours = (hours % 12) || 12;


    hour.innerText=hours;
    minute.innerText=minutes;
    second.innerText=seconds;
    ampm.innerText=ampm1;

setTimeout(()=>{
    updateClock();
},1000);

}
updateClock();