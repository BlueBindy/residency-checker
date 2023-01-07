
function checkReset() {
    let confirmReset = document.getElementById("reset-button");
    return confirm("Are you sure you want to clear everything you've entered?");
    confirmReset.reset();
} 

