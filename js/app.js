//1. Makin Bacon
/*Create a function named `moreContent` that will initiate the button after clicking on it.

The function will add the following content inside the paragraph with the id of `more`.
*/

var bacon = "Shoulder turducken brisket, kevin swine andouille tri-tip salami tail ham sausage pork loin. Ribeye short loin rump kielbasa pork. Capicola short loin turducken corned beef tongue, chuck leberkas salami frankfurter. Kielbasa fatback pancetta, ground round meatball turducken jowl ribeye alcatra sirloin bacon corned beef beef ribs short loin. Pork belly spare ribs biltong corned beef meatball short ribs tongue alcatra swine drumstick. Biltong shankle kevin, cupim sirloin bresaola brisket. Tail pork belly biltong ball tip tri-tip, pig jerky cow pastrami prosciutto ;ground round bacon capicola tongue meatball.";

function moreContent() {
  var baconExtender = document.createElement("p");
  baconExtender.id = "more";
  baconExtender.innerHTML = bacon;
  var dElem = document.getElementsByClassName("block1 col-sm-4")[0];
  console.log(dElem);
  dElem.appendChild(baconExtender);
}


//2. HTTP
/*Create a function named `lessContent` that will initiate the `Show Less` link after clicking on it.

The function will hide the contents in the pargraph with the id of `less` after clicking on the `Show Less` link.*/

function lessContent() {
  var pElem = document.getElementById("less");
  pElem.style.display = "none";
}

//3. Tacocat, The Original Palindrome King
/*Create a function named `zoom` that will increase the font size of the paragraph with the id of `biggie` after hovering your mouse over it. Increae the font size to 150%*/

function zoom() {
  var p = document.getElementById("biggie");
  p.style.fontSize = "150%";
  p.style.color = "red";
}

//4. McDonalds
/*Create a variable name menuItems and assign it an array of three of your favorite items at McDonald's.

Next, create a function named valueMenu that will display your favorite items in the paragraph the the id of `menu` after clicking on the showMenu paragraph.*/

var menuItems = ["french fries","sundae","apple pie"];

function valueMenu() {
  var pId = document.getElementById("showMenu");
  pId.innerHTML = menuItems;
}

//5. Gin.
/*Create a function named redFace that will change the paragraph text to red and a font size of 20px after clicking on the text.*/

function redFace() {
  pId = document.getElementById("drink");
  pId.style.color="red";
  pId.style.fontSize="20px";
  
}

//6. Peanut Butter Cup Oreos
/*Create a function `showPrice` that will add the price of `$5.55` inside the paragraph with the id `price` after hovering your mouse over the paragraph.*/

function showPrice() {
  var price = document.getElementById("price");
  price.innerHTML = "$5.55";
}

//7. Mr. Buttons
/*Add an Event Listener to the button that will display `myQuote` inside the paragraph with the id of `displayQuote` after the button is clicked.*/

var myQuote = "Our lives are defined by opportunities; even the ones we miss.";

var ben = document.getElementById("Benjamin");
ben.addEventListener("click", benQuote);

function benQuote() {
  var benSaying = document.getElementById("displayQuote");
  benSaying.innerHTML = myQuote;
}

//8. Say It again, Randomly
/*Create a function that will generate a random quote from the variable below after clicking on the button.*/

var quotes = ["It's a funny thing about comin' home. Looks the same, smells the same, feels the same. You'll realize what's changed is you.", "Momma? Momma? Some days, I feel different than the day before.", "Some people, were born to sit by a river. Some get struck by lightning. Some have an ear for music. Some are artists. Some swim. Some know buttons. Some know Shakespeare. Some are mothers. And some people, dance.", "For what it's worth, it's never too late to be whoever you want to be."];


var buttonRandom = document.getElementById("random");
random.addEventListener("click",randomQuote);
function randomQuote() {
  var quoteArray = quotes;
  var arrayLength = quoteArray.length;
  var whichQuote = Math.floor(Math.random() * arrayLength);
  var quoteHome = document.getElementById("displayQuotes");
  quoteHome.innerHTML = quoteArray[whichQuote];
}

//9. Unlock the Secret to Financial Freedom
/*Create an event listener that will show and hide the message when clickig on the button.
*/
var moneyAdd = document.getElementById("showHide");
moneyAdd.addEventListener("click",showMoney);

function showMoney() {
  var secretLoc = document.getElementById("showmoney");
  if(secretLoc.style.display === "none") {
  secretLoc.style.display = "block";
  } else {
    secretLoc.style.display = "none";
  }
}