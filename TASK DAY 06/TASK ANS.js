	fix.html
<!DOCTYPE html>
<html>
<body>
 <script>
 alert( “I’m JavaScript!’);
 </script>
 Whats the error in this ?
</body>
</html>


Ans:<!DOCTYPE html>
<html>
  <body>
    <script>
      alert( "I\’m JavaScript!");
    </script>
    // Whats the error in this ?
  </body>
</html>

------------------------------------------------

fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

scripts.js :
alert(“I’m invoked!”);

ANS :
<!-- fix.html -->
<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>

script.js
alert("I’m invoked!");

-------------------------------------------------
EXPLAIN ?

we are having couple of tags html,body and we are using relative path
to access .js(javascript)
  
<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>

In js we are using alert keyword to prompt a window to display a
message we written and it is multi-line 
script and it works as we coded unless we use prettier.

script.js
alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working

--------------------------------------------------------
Fix the below to alert Guvi geek
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;
alert( admin ); // "Guvi geek"

ANS:
<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>

let admin = 9,
  fname = 10.5;
fname = "Guvi";
lname = "geek";
admin = fname + lname;
alert(admin); // "Guvi geek"

---------------------------------------------------------
Fix the below to alert hello Guvi geek
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( 'hello ${name}' );

ANS :
<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>

let fname = 10.5;
fname = "Guvi";
lname = "geek";
let name = fname + lname;
alert("hello" + " " + `${fname}${lname}`);


--------------------------------------------------------------------

Fix the below to alert sum of two numbers
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);

ANS :
let a = prompt("First number?");
let b = prompt("Second number?");
alert(+a + +b);


-------------------------------------------------------------------------

If you run the below scritpt you will get “Code is Blasted”
Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
var a = "2" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

ANS:
if we use this we get Diffused

var a = "2" == "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted");
} else {
  console.log("Diffused");
}

----------------------------------------------------------------------------

How to get the success in console.
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

ANS:

let a = prompt("Enter a number?");
//Don't modify any code below this
if (a >= 1) {
  console.log("OMG it works for any number inc 0");
} else {
  console.log("Success");
}

-----------------------------------------------------------------------

How to get the correct score in console.
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

ANS :
let value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

-------------------------------------------------------------------------------------
Fix the code to welcome the Employee
fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

script.js
let login = 'Employee';
let message = (login == 'Employee') ? :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);

ANS :
let login = prompt("ENTER YOUR NAME");

if (login == login) {
  console.log(" welcome " + " " + `${login}`);
}

---------------------------------------------------------------------------------------
Fix the code to welcome the boss
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
// You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
 let message = "welcome boss";
}
else
{
 let message = "Go away";
}
  console.log(message);
  
  ANS :
  
  let message;
if (null || 2 || undefined) {
  message = "welcome boss";
} else {
  message = "Go away";
}
console.log(message);

---------------------------------------------------------------------
  

