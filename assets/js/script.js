function submitButton() {
    /* days-section does not take .value as it is class name for a div which doesn't have a value, so throws undefined*/
    /*let allDays = document.getElementsByClassName("days-section");*/
    let inputTag = document.getElementsByClassName('input-field');
    for (let i = 0; i < inputTag.length; i++) {
        let findResult = parseInt(inputTag[i].value);
        console.log(findResult);}      
    }  


    /* change id to inputfield-n, for loop through that create a string inputfield-n.value*/
    /*then put that generated string into another document.getElementByID...*/
    /* then sum function or add values to a variable */



    function checkReset() {
        return confirm("Are you sure you want to clear everything you've entered?");
    }