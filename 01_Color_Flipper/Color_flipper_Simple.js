const colors = ["green","red","blue","coral","aqua","white","black","pink","purple","yellow"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    // get random num between 0-3
    const randomnum = getRandomNum();
    document.body.style.backgroundColor = colors[randomnum];
    color.textContent = colors[randomnum];
})
function getRandomNum(){
    return Math.floor(Math.random()*colors.length);
}