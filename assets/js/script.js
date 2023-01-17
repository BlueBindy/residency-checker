function generateResult(sumOfYears, contResidencyInput) {

    if (sumOfYears > 1616) {
        `You have ${sumOfYears} resident days in the last 9 years. This is enough to meet the total residency requirement.`
    } else {
        `You have ${sumOfYears} resident days in the last 9 years. This is not enough to meet the total residency requirement.`
    }

    if (contResidencyInput >= 323 && contResidencyInput <= 366) {
        `You have ${contResidencyInput} days of continuous residency in the last year. This is enough to satisfy the continuous residency requirement of 323 days to 365 days.`
    } else {
        `You have ${contResidencyInput} days of continuous residency in the last year. This is not enough to satisfy the continuous residency requirement of at least 323 days.`
    }

    if (contResidencyInput >= 323 && contResidencyInput <= 366 && sumOfYears > 1616) {
        `Congratulations, you have met both of the residency requirements for a naturalisation application!`
    } else {
        `Unfortunately, you do not meet both of the essential residency criteria. You'll need to meet both criteria simultaneously before your application is considered eligible.`
    }
}


function submitButton() {
    /* days-section does not take .value as it is class name for a div which doesn't have a value, so throws undefined*/
    /*let allDays = document.getElementsByClassName("days-section");*/
    let contResidencyInput = parseInt(document.getElementById('input-field11').value)
    let firstYearInput = parseInt(document.getElementById('input-field1').value)
    if (contResidencyInput && firstYearInput) {
        if (contResidencyInput <= 366 && contResidencyInput >= 0 && firstYearInput <= 366 && firstYearInput >= 0) {} else {
            alert('All entries must be between 0 and 366.')
            return
        }
    } else {
        alert('You must enter your days of residency for at least the current calendar year as well as enter your residential days within the last 365 days to continue.')
        return
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
    generateResult(sumOfYears, contResidencyInput)



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