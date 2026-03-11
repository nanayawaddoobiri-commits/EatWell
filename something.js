/* ===============================
EATWELL GLOBAL DATA
================================ */

let calories = Number(localStorage.getItem("calories")) || 0
let screenTime = Number(localStorage.getItem("screenTime")) || 0
let points = Number(localStorage.getItem("points")) || 0
let level = Number(localStorage.getItem("level")) || 1

let calorieGoal = 2000
let screenGoal = 180

/* ===============================
SAVE DATA
================================ */

function save(){
localStorage.setItem("calories", calories)
localStorage.setItem("screenTime", screenTime)
localStorage.setItem("points", points)
localStorage.setItem("level", level)
}


/* ===============================
LOGIN SYSTEM
================================ */

function login(){

let user = document.getElementById("user").value
let pass = document.getElementById("pass").value

if(user && pass){
localStorage.setItem("logged","true")
window.location.href="index.html"
}
else{
alert("Please enter username and password")
}

}


let totalCalories = Number(localStorage.getItem("totalCalories")) || 0;

/* Show saved calories when page loads */
document.getElementById("totalCal").textContent = totalCalories;

function addFood(){

let food = document.getElementById("food").value;
let cal = Number(document.getElementById("cal").value);

if(food === "" || cal === 0){
alert("Enter food and calories");
return;
}

/* Create food list item */
let li = document.createElement("li");
li.textContent = food + " - " + cal + " kcal";

document.getElementById("foodList").appendChild(li);

/* Update total calories */
totalCalories += cal;

/* Update the number on screen */
document.getElementById("totalCal").textContent = totalCalories;

/* Save data */
localStorage.setItem("totalCalories", totalCalories);

/* Clear inputs */
document.getElementById("food").value = "";
document.getElementById("cal").value = "";
}
function updateCalorieProgress(){

let percent = (totalCalories / calorieGoal) * 100

if(percent > 100) percent = 100

document.getElementById("percent").innerText = Math.floor(percent) + "%"

let offset = 314 - (314 * percent / 100)

document.getElementById("ringProgress").style.strokeDashoffset = offset

}

/* ===============================
SCREEN TIME TRACKER
================================ */

function addScreenTime(){

let mins = Number(document.getElementById("screenMinutes").value)

if(!mins){
alert("Enter screen time minutes")
return
}

screenTime += mins

document.getElementById("screenTotal").innerText = screenTime

updateScreenProgress()

save()

document.getElementById("screenMinutes").value=""

}


/* ===============================
SCREEN PROGRESS BAR
================================ */

function updateScreenProgress(){

let percent = (screenTime / screenGoal) * 100

if(percent > 100) percent = 100

let bar = document.getElementById("screenProgress")

if(bar){
bar.style.width = percent + "%"
}

}


/* ===============================
QUIZ SYSTEM
================================ */

function answer(correct){

let result = document.getElementById("quizResult")

if(correct){

points += 20

result.innerHTML = "✅ Correct! +20 XP"

showXP("+20 XP")

}
else{

result.innerHTML = "❌ Incorrect. Try again!"

}

updateLevel()

save()

}


/* ===============================
LEVEL SYSTEM
================================ */

function updateLevel(){

if(points >= 200){
level = 5
}
else if(points >= 120){
level = 4
}
else if(points >= 60){
level = 3
}
else if(points >= 30){
level = 2
}
else{
level = 1
}

let levelDisplay = document.getElementById("level")

if(levelDisplay){
levelDisplay.innerText = level
}

}


/* ===============================
XP POPUP
================================ */

function showXP(text){

let popup = document.createElement("div")

popup.className = "xp-popup"

popup.innerText = text

document.body.appendChild(popup)

setTimeout(()=>{
popup.remove()
},2000)

}


/* ===============================
LOAD DATA WHEN PAGE OPENS
================================ */

window.onload = function(){

if(document.getElementById("totalCalories")){
document.getElementById("totalCalories").innerText = calories
}

if(document.getElementById("screenTotal")){
document.getElementById("screenTotal").innerText = screenTime
}

updateCalorieProgress()

updateScreenProgress()

updateLevel()

}