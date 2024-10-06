const decreaseBtn=document.getElementById("decreaseBtn");
const resetBtn=document.getElementById("resetBtn");
const increaseBtn=document.getElementById("increaseBtn");
let countLabel=document.getElementById("countLabel");
let count = 0;


decreaseBtn.onclick=function(){
count--
countLabel.textContent=count;

}
increaseBtn.onclick=function(){
    count++;
    countLabel.textContent=count;
}
resetBtn.onclick=function(){
    count=0;
    countLabel.textContent=count;
}

let rollBtn = document.getElementById("roll");
let randomnum = document.getElementById("randomnum");

rollBtn.onclick = function() {
    let min = 1;
    let max = 10;
    
    // Generate three random numbers
    let random1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let random2 = Math.floor(Math.random() * (max - min + 1)) + min;
    let random3 = Math.floor(Math.random() * (max - min + 1)) + min;
    let random4= Math.floor(Math.random() * (max - min + 1)) + min;
    
    // Display the three random numbers
    randomnum.textContent = `${random1}, ${random2}, ${random3},  ${random4}`;
}

