/**
 * Returns calculated eligibility message for naturalisation based on 
 * two necessary requirements of total days and continuous residency.
 * @param {*} sumOfYears Datatype = number. Calculates the sum of 
 * qualifying residential days in the last nine years, used for 
 * checking total residency requirement.
 * @param {*} contResidencyInput Datatype= number. Returns the 
 * number of residential days in the last 365, used for checking 
 * continuous residency requirement.
 */
function generateResult(sumOfYears, contResidencyInput) {
    // jshint strict: true
    'use strict';
    let resultMessage1 = '';
    let resultMessage2 = '';
    let resultMessage3 = '';
    if (sumOfYears > 1616) {
        resultMessage1 = `You have ${sumOfYears} resident days in the \
        last 9 years. This is enough to meet the total residency \
        requirement including allowable absences (1826 days less allowable \
        absences of 210 days).`;
    } else {
        resultMessage1 = `You have ${sumOfYears} resident days in the \
        last 9 years. This is not enough to meet the miniumum total \
        residency requirement of 1616 days (1826 days less allowable \
        absences of 210 days).`;
    }
    if (contResidencyInput >= 323) {
        resultMessage2 = `You have ${contResidencyInput} days of \
        continuous residency in the last 365 days. This is enough \
        to satisfy the continuous residency requirement of at least 323 days.`;
    } else {
        resultMessage2 = `You have ${contResidencyInput} days of \
        continuous residency in the last 365 days. This is not enough \
        to satisfy the continuous residency requirement of at least 323 days.`;
    }
    if (contResidencyInput >= 323 && sumOfYears > 1616) {
        resultMessage3 = `Congratulations, you have met both of the \
        residency requirements for a naturalisation application!`;
    } else {
        resultMessage3 = `Unfortunately, you do not meet both of \
        the essential residency criteria. You'll need to meet both \
        criteria simultaneously before your application is considered eligible.`;
    }
    let showResults = document.getElementsByClassName('results')[0];
    document.getElementById('display-resultpopup1').innerHTML = resultMessage1;
    document.getElementById('display-resultpopup2').innerHTML = resultMessage2;
    document.getElementById('display-resultpopup3').innerHTML = resultMessage3;
    showResults.style.display = 'block';
}
/**
 * On submit, issues user alert if user input is invalid or incomplete, 
 * otherwise calls calculated eligibility message for user.
 * @returns Ensures alert message notifies only one user error at a 
 * time (either invalid input or insufficient user entries) even if 
 * both errors are made simultaneously.
 */
function submitButton() {
    // days-section does not take .value as it is class name for a div 
    // which doesn't have a value, so throws undefined
    let contResidencyInput = parseInt(
        document.getElementById('input-field11').value
    );
    let firstYearInput = parseInt(document.getElementById('input-field1').value);
    if (contResidencyInput && firstYearInput) {
        if (
            contResidencyInput <= 366 &&
            contResidencyInput >= 0 &&
            firstYearInput <= 366 &&
            firstYearInput >= 0
        ) {} else {
            alert('All entries must be between 0 and 366.');
            return;
        }
    } else {
        alert(
            'You must enter your days of residency for at least the \
            current calendar year (in First step) as well as enter your \
            residential days within the last 365 days (Second step) to continue.'
        );
        return;
    }
    let inputTag = document.getElementsByClassName('input-field');
    let validInput = true;
    let sumOfYears = 0;
    for (let i = 0; i < inputTag.length; i++) {
        let findResult = parseInt(inputTag[i].value);
        // this function will only print values that evalutate 
        // to truthy and therefore won't print NaN
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
        // this alert needs to be outside else block above to 
        // prevent it being triggered by every black input boxß
        alert('Please only enter a number of days between 0 and 366');
    }
    generateResult(sumOfYears, contResidencyInput);
}

let showResults = document.getElementsByClassName('results')[0];
showResults.style.display = 'none';

// Code structure for inserting current year suggested by 
// Riley Jones on StackOverflow 
/**
 * Displays correct calendar years, and partial years where appropriate, 
 * for eligible period of total residency.
 */
let todaysDate = new Date();
let thisYear = todaysDate.getFullYear();
let thisDay = todaysDate.getDate();
let thisMonth = todaysDate.getMonth();
let earliestYear = todaysDate.getFullYear() - 9;
let yearAgo = todaysDate.getFullYear() - 1;

document.getElementById(
    'current-year'
).innerHTML = `${new Date().getFullYear()}*`;
document.getElementById('current-minusone').innerHTML =
    new Date().getFullYear() - 1;
document.getElementById('current-minustwo').innerHTML =
    new Date().getFullYear() - 2;
document.getElementById('current-minusthree').innerHTML =
    new Date().getFullYear() - 3;
document.getElementById('current-minusfour').innerHTML =
    new Date().getFullYear() - 4;
document.getElementById('current-minusfive').innerHTML =
    new Date().getFullYear() - 5;
document.getElementById('current-minussix').innerHTML =
    new Date().getFullYear() - 6;
document.getElementById('current-minusseven').innerHTML =
    new Date().getFullYear() - 7;
document.getElementById('current-minuseight').innerHTML =
    new Date().getFullYear() - 8;
document.getElementById(
    'current-minusnine'
).innerHTML = `Days <b>since</b> ${thisDay}/${thisMonth + 1}/${earliestYear}`;
document.getElementById('last-365').innerHTML = `Days <b>from</b> ${thisDay}/${
    thisMonth + 1
  }/${yearAgo} <br> <b>to</b> ${thisDay}/${thisMonth + 1}/${thisYear}*`;