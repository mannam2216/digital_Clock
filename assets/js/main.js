const hrs = document.querySelector("#hrs");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");


var date = new Date();
setInterval(() => {
     // console.log(date);



     
     hrs.innerHTML = (date.getHours()<10?"0":"") + date.getHours();
     min.innerHTML = (date.getMinutes()<10?"0":"") + date.getMinutes();
     sec.innerHTML = (date.getSeconds()<10?"0":"") + date.getSeconds();




}, 1000);
