

setInterval(() => {
    


let a= new Date();
let date=a.toLocaleDateString();

let time= `${a.getHours()} : ${a.getMinutes()} :  ${a.getSeconds()}`;
document.getElementById('row1').innerHTML=`indian time is:- ${time}<br> Date:-   ${date}` ;
}, 1000);