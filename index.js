// EX 1
// pop up window with alert (insert a number)

function turnString2Number(num){
return Number(num)
}

let x = turnString2Number(prompt("Please enter first number"));
let y = turnString2Number(prompt("Please enter second number"));

console.log(x)
console.log(y)

if(x === y){
console.log("BOOM")
alert("BOOM")
}else {
alert("TRY AGAIN")
console.log("TRY AGAIN")
}

// EX 2
// b + c resolt print only in the console.log

let b = 22
let c = 58
console.log("22+58 = ", b+c)

// EX 3
// d * e resolt print only in the console.log

let d = 10
let e = 10
console.log("10*10 = ", d*e)

// EX 4
// Today is (date) and greeting for the week

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const dy = new Date();
let day = weekday[dy.getUTCDay()];
const myMessage = ["Good Week","Good Day","Good Day","Good Day","Happy Weekend","Happy Weekend","Happy Weekend"];
let ms = myMessage [dy.getUTCDay()];
document.getElementById("my_day").innerHTML ="Today is " + day + "." + " We wish you a " + ms + " !";


// EX 5
// The date of today UTC time 

const da = new Date();
let myData = da.getUTCDate();
document.getElementById("my_date").innerHTML = "Today is the " + myData + "th";

// Daliy greeting 
let currentDate = new Date();
let dayOfMonth = currentDate.getUTCDate();
let greeting;
if (dayOfMonth === 1) {
    greeting = "Good Month";
  } else if (dayOfMonth === 10) {
    greeting = "Get Salary";
  } else if (dayOfMonth === 31) {
    greeting = "BOOM BOOM";
  } else if (dayOfMonth >= 20 && dayOfMonth <= 30) {
    greeting = "The End";
  } else if (dayOfMonth >= 10 && dayOfMonth < 20) {
    greeting = "BE HAPPY";
  } else if (dayOfMonth >= 2 && dayOfMonth < 10) {
    greeting = "Start Work";
  }
  document.getElementById("my_date_ms").innerHTML = greeting;


// EX 6
// Holiday declaration

let purim = "Happy Purim"
let passover = "Clean Home"
let shavoout = "Eat Milk"
let suckot = "Build Sucka"

// EX 7
// if the Password has less then 6 characters then input color is red

const input = document.getElementById('pass_word');
input.addEventListener('input', event => {
  if (input.value.length < '6') {
    input.style.backgroundColor = 'red';
  } else {
    input.style.backgroundColor = '';
  }
});

// if the User Name is not corect then input color is red

const nameInput = document.getElementById('user_name');
nameInput.addEventListener('input', event => {
  if (nameInput.value === 'admin') {
    nameInput.style.backgroundColor = '';
  } else {
    nameInput.style.backgroundColor = 'red';
  }
});


// Save username and password 
let correctUsername = "admin" ; 
let correctPassword = "password123" ; 
// Select form 
let form = document . querySelector ( "form" ); 
// Intercept form submission 
form. addEventListener ( "submit" , function ( event ) { 
  event.preventDefault();
    // Select username and password inputs 
    let usernameInput = document . getElementById ( "user_name" ); 
    let passwordInput = document . getElementById ( "pass_word" ); 
    // Check if the inputs are correct 
    if (usernameInput. value === correctUsername && passwordInput. value === correctPassword) { 
        // If username and password are correct, a confirmation message is displayed 
        // alert ( "Login successful!" ); 
        document.getElementById("login_ms").innerHTML = "Login successful!";
    } else { 
    // if the username or password are incorrect, an error message is displayed 
    // alert ( "Username or password is incorrect!" ); 
    document.getElementById("login_ms").innerHTML = "Username or password is incorrect!";
  }
});

