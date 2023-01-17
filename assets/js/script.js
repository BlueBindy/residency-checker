function submitButton() {
    /* days-section does not take .value as it is class name for a div which doesn't have a value, so throws undefined*/
    /*let allDays = document.getElementsByClassName("days-section");*/
    let contResidencyInput = document.getElementById('input-field11')
    let firstYearInput = document.getElementById('input-field1')
    if (contResidencyInput && firstYearInput) {
        if (contResidencyInput <= 366 && contResidencyInput >= 0 && firstYearInput <= 366 && contResidencyInput >= 0) {} else {
            alert('You must enter your days of residency for at least the current calendar year as well as enter your residential days within the last 365 days to continue.')
        }
    }
}


let inputTag = document.getElementsByClassName('input-field');
let validInput = true;
let sumOfYears = 0
for (let i = 0; i < inputTag.length; i++) {
    let findResult = parseInt(inputTag[i].value);
    /*this function will only print values that evalutate to truthy and therefore won't print NaN*/
    if (findResult) {
        if (findResult <= 366 && findResult >= 0) {
            sumOfYears += findResult;
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
} else {
    console.log(sumOfYears)
}

let inputTag2 = document.getElementByID('input-field11');
let validInput2 = true;
let sumOfContRes = 0
for (let i = 0; i < inputTag2.length; i++) {
    let findResult2 = parseInt(inputTag2[i].value);
    /*this function will only print values that evalutate to truthy and therefore won't print NaN*/
    if (findResult2) {
        if (findResult2 <= 366 && findResult2 >= 0) {
            sumOfContRes += findResult2;
        } else {
            validInput2 = false;
            break;
        }
    }
}
if (!validInput2) {
    /*this alert needs to be outside else block above to prevent it being triggered by every black input box*/
    alert('Input above 366 or below 0 days will not be counted in your results. \
        Please ensure all days entered between 0 and 366 days.')
} else {
    console.log(sumOfContRes)
}




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


