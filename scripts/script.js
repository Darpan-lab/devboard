// time
const currentDate = new Date().toLocaleDateString();

const currentTime = new Date().toLocaleTimeString([], {
    hour12: true
});
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const day = weekday[new Date().getDay()];
document.getElementById('day').innerText = day
let taskAssigned = 6;
let Point = 21;
document.getElementById('time').innerText = currentDate;
document.getElementById('theme-btn').addEventListener('click', function(){
    const hexLetter = "0123456789ABCDEF";
    let color = "#";
    for(i = 1; i <= 6; i++){
        color += hexLetter[Math.floor(Math.random() * 16)]
    }
    document.getElementById('body').style.backgroundColor = color;
})

const buttons = document.querySelectorAll('.complete-btn');
for(const btn of buttons){
    btn.addEventListener('click', function(event){
        alert("Board Updated Successfully")
        taskAssigned = taskAssigned - 1;
        document.getElementById('task-assigned').innerHTML = taskAssigned;
        Point = Point + 1
        document.getElementById('point').innerHTML = Point;
        event.target.classList.add('disable-btn')
        event.target.setAttribute("disabled", true)
        const title = event.target.parentNode.parentNode.querySelector('h2').innerText
        const msg = document.createElement('p')
        msg.classList.add('activity-messages')
        msg.innerText = `You have Complete The Task ${title} at ${currentTime}`
        document.getElementById('activity-msg').appendChild(msg)
        if(taskAssigned == 0){
            alert("Congrates! You have Completed all the current tasks")
        }
    })
}
document.getElementById('clear-btn').addEventListener('click', function(){
    document.getElementById('activity-msg').innerHTML = ""
})

document.getElementById('discover').addEventListener('click', function(){
    window.location.href="./blog.html"
})
