function submitButton() {
    /* days-section does not take .value as it is class name for a div which doesn't have a value, so throws undefined*/
    /*let allDays = document.getElementsByClassName("days-section");*/
    let inputTag = document.getElementsByClassName('input-field');
    let validInput = true;
    for (let i = 0; i < inputTag.length; i++) {
        let findResult = parseInt(inputTag[i].value);
        /*this function will only print values that evalutate to truthy and therefore won't print NaN*/
        if (findResult) {
            if (findResult <= 366 && findResult >= 0) {
                console.log(findResult);
            } else {
                validInput = false;
                break;
            }
        }
    }
    if (!validInput) {
        /*this alert needs to be outside else block above to prevent it being triggered by every black input box*/
        alert('Input above 366 or below 0 days will not be counted in your results. \
        Please ensure all days entered between 0 and 366 days.')
    }
}



/* change id to inputfield-n, for loop through that create a string inputfield-n.value*/
/*then put that generated string into another document.getElementByID...*/
/* then sum function or add values to a variable */

/*let today = new Date();
    let year = today.getFullYear();
    console.log(year);

   let year1 = document.getElementById('current-year')
   console.log(year1)*/

/* Code structure for inserting current year suggested by Riley Jones on StackOverflow*/

/*code to insert correct year based on existing date into website*/
/*need to edit to avoid global variable*/
let todaysDate = new Date();
let thisYear = todaysDate.getFullYear();
let thisDay = todaysDate.getDate();
let thisMonth = todaysDate.getMonth();
let earliestYear = todaysDate.getFullYear() - 9;
let yearAgo = todaysDate.getFullYear() - 1;

document.getElementById("current-year").innerHTML = (new Date().getFullYear());
document.getElementById("current-minusone").innerHTML = (new Date().getFullYear() - 1);
document.getElementById("current-minustwo").innerHTML = (new Date().getFullYear() - 2);
document.getElementById("current-minusthree").innerHTML = (new Date().getFullYear() - 3);
document.getElementById("current-minusfour").innerHTML = (new Date().getFullYear() - 4);
document.getElementById("current-minusfive").innerHTML = (new Date().getFullYear() - 5);
document.getElementById("current-minussix").innerHTML = (new Date().getFullYear() - 6);
document.getElementById("current-minusseven").innerHTML = (new Date().getFullYear() - 7);
document.getElementById("current-minuseight").innerHTML = (new Date().getFullYear() - 8);
document.getElementById("current-minusnine").innerHTML = (`Days <b>since</b> ${thisDay}/${thisMonth + 1}/${earliestYear}`);
document.getElementById("last-365").innerHTML = (`Days <b>from</b> ${thisDay}/${thisMonth + 1}/${yearAgo} <br> <b>to</b> ${thisDay}/${thisMonth + 1}/${thisYear}`);


function checkReset() {
    return confirm("Are you sure you want to clear everything you've entered?");
}