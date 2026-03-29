let count=0;

let countElement = document.getElementById("count");

let increaseBtn= document.getElementById("increase");

let decreaseBtn= document.getElementById("decrease");

let resetBtn= document.getElementById("reset");

// زيادة
increaseBtn.onclick= function(){
    count++;
    countElement.textContent = count;
   
}

//تقليل
decreaseBtn.onclick= function(){
    count--;
    countElement.textContent = count;
}

// اعادة للصفر 

resetBtn.onclick= function(){
    count = 0;
    countElement.textContent = count;
}