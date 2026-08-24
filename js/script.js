//search startttttttt
let availableKeywords = [
    'Percy',
    'Ripple',
    'Atlas',
    'Skye',
    'Azuron',
    'Yuki',
    'Aurelia',
    'Starwind',
    'Briar',
    
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.group(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML ='';
    }
}

function display(result) {
    if (result.length === 0) {
        resultsBox.innerHTML = '';
        return;
    }
      
    if(!result.length){
        resultsBox.innerHTML = '';
        resultsBox.style.border = 'none'; 
    } else {
        resultsBox.style.border = '1px solid #ddd'; 
    }

    const content = result.map((list) => {
        return `<li onclick="selectInput(this)">${list}</li>`;
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(listItem) {
  inputBox.value = listItem.innerHTML;

  if (listItem.innerHTML.toLowerCase() === "percy") {
    window.location.href = "../index.html#anchor-percy";
  }

  if (listItem.innerHTML.toLowerCase() === "ripple") {
    window.location.href = "../index.html#anchor-ripple";
  }

  if (listItem.innerHTML.toLowerCase() === "atlas") {
    window.location.href = "../index.html#anchor-atlas";
  }

  if (listItem.innerHTML.toLowerCase() === "skye") {
    window.location.href = "../index.html#anchor-skye";
  }

  if (listItem.innerHTML.toLowerCase() === "azuron") {
  window.location.href = "../pages/about.html#anchor-azuron";
}

  if (listItem.innerHTML.toLowerCase() === "yuki") {
    window.location.href = "../pages/about.html#anchor-yuki";   
  }

  if (listItem.innerHTML.toLowerCase() === "aurelia") {
    window.location.href = "../pages/about.html#anchor-aurelia";
  }

  if (listItem.innerHTML.toLowerCase() === "starwind") {
    window.location.href = "../pages/about.html#anchor-starwind";
  }

  if (listItem.innerHTML.toLowerCase() === "briar") {
    window.location.href = "../pages/about.html#anchor-briar";
  }



  resultsBox.innerHTML = "";
}




























//creating a very simple shopping cart system using javascript. The code is a bit repetitive but it works and is easy to understand. :D

let price1 = document.querySelector(".price1").innerText;
let price2 = document.querySelector(".price2").innerText;
let price3 = document.querySelector(".price3").innerText;
let price4 = document.querySelector(".price4").innerText;
let price5 = document.querySelector(".price5").innerText;
let price6 = document.querySelector(".price6").innerText;
let total1 = document.querySelector(".total1");
let total2 = document.querySelector(".total2");
let total3 = document.querySelector(".total3");
let total4 = document.querySelector(".total4");
let total5 = document.querySelector(".total5");
let total6 = document.querySelector(".total6");
let qty1 = document.querySelector(".value1").innerText;
let qty2 = document.querySelector(".value2").innerText;
let qty3 = document.querySelector(".value3").innerText;
let qty4 = document.querySelector(".value4").innerText;
let qty5 = document.querySelector(".value5").innerText;
let qty6 = document.querySelector(".value6").innerText;




let sumPrice1 = 0;
let sumPrice2 = 0;
let sumPrice3 = 0;
let sumPrice4 = 0;
let sumPrice5 = 0;
let sumPrice6 = 0;







function countMinus1()
{
    let count = parseInt(document.querySelector(".value1").innerText);
    if(count > 0){count--;}
    document.querySelectorAll(".value1").forEach(element => element.innerText = count);
    total1.innerText = "Total: R" + (price1.substring(7) * count) + ".00"; //this updates the total price for the item in the cart based on the quantity
    //alert(price1 );
    //alert(price1.replace(/\D/g, ""));  //The \D is to remove non-numeric characters, and the g is to apply it globally / every charcater in the String  //using info from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
                                                                 //and this example of  var carPriceNumber = Number(priceString.replace(/\D/g, ""));
    let numericPrice1 = price1.replace(/\D/g, ""); //removing the non-numeric characters from the price string to get the number value for calculations
    numericPrice1 = numericPrice1.substring(0, numericPrice1.length - 2); //removing the last two characters (the .00) from the price string to get the number value for calculations
    sumPrice1 = numericPrice1 * count; //calculating the total price for the item based on the quantity
    total1.innerText = "Total: R" + (numericPrice1 * count) + ".00";
    refreshModal();

}
function countPlus1()
{
    let count = parseInt(document.querySelector(".value1").innerText);
    count++;
    document.querySelectorAll(".value1").forEach(element => element.innerText = count); 
    let numericPrice1 = price1.replace(/\D/g, ""); 
    numericPrice1 = numericPrice1.substring(0, numericPrice1.length - 2); 
    sumPrice1 = numericPrice1 * count;
    total1.innerText = "Total: R" + (numericPrice1 * count) + ".00"; 
    refreshModal();

}

function countMinus2()
{
    let count = parseInt(document.querySelector(".value2").innerText);
    if(count > 0){count--;}
    document.querySelectorAll(".value2").forEach(element => element.innerText = count);
        let numericPrice2 = price2.replace(/\D/g, ""); 
    numericPrice2 = numericPrice2.substring(0, numericPrice2.length - 2); 
    sumPrice2 = numericPrice2 * count;
    total2.innerText = "Total: R" + (numericPrice2 * count) + ".00"; 
    refreshModal();
}
function countPlus2()
{
    let count = parseInt(document.querySelector(".value2").innerText);
    count++;
    document.querySelectorAll(".value2").forEach(element => element.innerText = count);
        let numericPrice2 = price2.replace(/\D/g, ""); 
    numericPrice2 = numericPrice2.substring(0, numericPrice2.length - 2); 
    sumPrice2 = numericPrice2 * count;
    total2.innerText = "Total: R" + (numericPrice2 * count) + ".00";
    refreshModal();
}

function countMinus3()
{
    let count = parseInt(document.querySelector(".value3").innerText);
    if(count > 0){count--;}
    document.querySelectorAll(".value3").forEach(element => element.innerText = count);
        let numericPrice3 = price3.replace(/\D/g, "");
    numericPrice3 = numericPrice3.substring(0, numericPrice3.length - 2);
    sumPrice3 = numericPrice3 * count;
    total3.innerText = "Total: R" + (numericPrice3 * count) + ".00";
    refreshModal();
}
function countPlus3()
{
    let count = parseInt(document.querySelector(".value3").innerText);
    count++;
    document.querySelectorAll(".value3").forEach(element => element.innerText = count);
        let numericPrice3 = price3.replace(/\D/g, "");
    numericPrice3 = numericPrice3.substring(0, numericPrice3.length - 2);
    sumPrice3 = numericPrice3 * count;
    total3.innerText = "Total: R" + (numericPrice3 * count) + ".00";
    refreshModal();
}

function countMinus4()
{
    let count = parseInt(document.querySelector(".value4").innerText);
    if(count > 0){count--;}
    document.querySelectorAll(".value4").forEach(element => element.innerText = count);
        let numericPrice4 = price4.replace(/\D/g, "");
    numericPrice4 = numericPrice4.substring(0, numericPrice4.length - 2);
    sumPrice4 = numericPrice4 * count;
    total4.innerText = "Total: R" + (numericPrice4 * count) + ".00";
    refreshModal();
}
function countPlus4()
{
    let count = parseInt(document.querySelector(".value4").innerText);
    count++;
    document.querySelectorAll(".value4").forEach(element => element.innerText = count);
        let numericPrice4 = price4.replace(/\D/g, "");
    numericPrice4 = numericPrice4.substring(0, numericPrice4.length - 2);
    sumPrice4 = numericPrice4 * count;
    total4.innerText = "Total: R" + (numericPrice4 * count) + ".00";
    refreshModal();
}

function countMinus5()
{
    let count = parseInt(document.querySelector(".value5").innerText);
    if(count > 0){count--;}
    document.querySelectorAll(".value5").forEach(element => element.innerText = count); 
    let numericPrice5 = price5.replace(/\D/g, "");
    numericPrice5 = numericPrice5.substring(0, numericPrice5.length - 2);
    sumPrice5 = numericPrice5 * count;
    total5.innerText = "Total: R" + (numericPrice5 * count) + ".00";
    refreshModal();
}
function countPlus5()
{
    let count = parseInt(document.querySelector(".value5").innerText);
    count++;
    document.querySelectorAll(".value5").forEach(element => element.innerText = count);
    let numericPrice5 = price5.replace(/\D/g, "");
    numericPrice5 = numericPrice5.substring(0, numericPrice5.length - 2);
    sumPrice5 = numericPrice5 * count;
    total5.innerText = "Total: R" + (numericPrice5 * count) + ".00";
    refreshModal();
}

function countMinus6()
{
    let count = parseInt(document.querySelector(".value6").innerText);
    if(count > 0){count--;}
    document.querySelectorAll(".value6").forEach(element => element.innerText = count);
    let numericPrice6 = price6.replace(/\D/g, "");
    numericPrice6 = numericPrice6.substring(0, numericPrice6.length - 2);
    sumPrice6 = numericPrice6 * count;
    total6.innerText = "Total: R" + (numericPrice6 * count) + ".00";
    refreshModal();
}
function countPlus6()
{
    let count = parseInt(document.querySelector(".value6").innerText);
    count++;
    document.querySelectorAll(".value6").forEach(element => element.innerText = count);
    let numericPrice6 = price6.replace(/\D/g, "");
    numericPrice6 = numericPrice6.substring(0, numericPrice6.length - 2);
    sumPrice6 = numericPrice6 * count;
    total6.innerText = "Total: R" + (numericPrice6 * count) + ".00";
    refreshModal();
}

function deleteItem1()
{
    qty1 = 0;
    document.querySelectorAll(".value1").forEach(element => element.innerText = qty1);
    total1.innerText = "Total: R0.00";
    sumPrice1 = 0;
    refreshModal();
    
}
function deleteItem2()
{
    qty2 = 0;
    document.querySelectorAll(".value2").forEach(element => element.innerText = qty2);
    total2.innerText = "Total: R0.00";
    sumPrice2 = 0;
    refreshModal();
    
}
function deleteItem3()
{
    qty3 = 0;   
    document.querySelectorAll(".value3").forEach(element => element.innerText = qty3);
    total3.innerText = "Total: R0.00";
    sumPrice3 = 0;
    refreshModal();
    
}
function deleteItem4()
{
    qty4 = 0;
    document.querySelectorAll(".value4").forEach(element => element.innerText = qty4);
    total4.innerText = "Total: R0.00";
    sumPrice4 = 0;
    refreshModal();
    
}
function deleteItem5()
{
    qty5 = 0;
    document.querySelectorAll(".value5").forEach(element => element.innerText = qty5);
    total5.innerText = "Total: R0.00";
    sumPrice5 = 0;
    refreshModal();
    
}
function deleteItem6()
{
    qty6 = 0;
    document.querySelectorAll(".value6").forEach(element => element.innerText = qty6);
    total6.innerText = "Total: R0.00";
    sumPrice6 = 0;
    refreshModal();
    
}

let totalPrice = 0;
function refreshModal()
{
    //making a condition to check if the quantity of each item is greater than 0, and if it is, it will display the card for that item in the cart modal, and if it's not, it will hide the card for that item in the cart modal. This way, only the items that have a quantity greater than 0 will be displayed in the cart modal.
    const qty1 = parseInt(document.querySelector(".value1").innerText) || 0; //using parseInt to convert the string value of the quantity to a number, and using || 0 to set it to 0 if it's not a number (e.g. if it's an empty string)
    const qty2 = parseInt(document.querySelector(".value2").innerText) || 0; //making a constant for the quantity of each item to use in the conditions below to check if the quantity is greater than 0
    const qty3 = parseInt(document.querySelector(".value3").innerText) || 0;
    const qty4 = parseInt(document.querySelector(".value4").innerText) || 0;
    const qty5 = parseInt(document.querySelector(".value5").innerText) || 0;
    const qty6 = parseInt(document.querySelector(".value6").innerText) || 0;
    
    if (qty1 > 0)
    {
        document.querySelector(".card1").style.display = "flex";
    }
    else{
        document.querySelector(".card1").style.display = "none";
    }



    if  (qty2 > 0)
    {
        document.querySelector(".card2").style.display = "flex";
    }                   
    else{
        document.querySelector(".card2").style.display = "none";
    }



    if  (qty3 > 0)
    {
        document.querySelector(".card3").style.display = "flex";
    }
    else{
        document.querySelector(".card3").style.display = "none";
    }



    if  (qty4 > 0)
    {
        document.querySelector(".card4").style.display = "flex";
    }
    else{
        document.querySelector(".card4").style.display = "none";
    }



    if  (qty5 > 0)
    {
        document.querySelector(".card5").style.display = "flex";
    }
    else{
        document.querySelector(".card5").style.display = "none";
    }



    if  (qty6 > 0)
    {
        document.querySelector(".card6").style.display = "flex";
    }
    else{
        document.querySelector(".card6").style.display = "none";
    }

    
    totalPrice = sumPrice1 + sumPrice2 + sumPrice3 + sumPrice4 + sumPrice5 + sumPrice6;
    document.querySelector(".cart-total-price").innerText = "Total Price Of Cart: R" + totalPrice + ".00"; 
    
}



refreshModal();


const newImg = document.createElement("img");
newImg.src = products[0].image;



//formmmmmmmm



function getFormInfo() {


  const userData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("topic").value,
    message: document.getElementById("message").value
  };

  
  alert(`Thank you, ${userData.name}! Your message has been sent.`);

  
}



