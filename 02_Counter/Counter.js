let count = 0;
const decrese = document.getElementById("negative");
const reset = document.getElementById("reset");
const increase = document.getElementById("positive");
const value = document.querySelector(".value");

decrese.addEventListener("click",function(){
    document.querySelector(".value").innerHTML = --count;
    value.style.color="red"; 
})
reset.addEventListener("click",function(){
    count=0;
    document.querySelector(".value").innerHTML = count;
    value.style.color="white";
})
increase.addEventListener("click",function(){
    document.querySelector(".value").innerHTML = ++count;
    value.style.color="green";
})