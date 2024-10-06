const permission = document.getElementById("permission");
const inp = document.getElementById("ageinp");
const submitButton = document.getElementById("submitbutton");

submitButton.onclick = function() {
    const age = parseInt(inp.value, 10); // Convert input value to a number

    // Check if the input is a valid number
    if (isNaN(age) || inp.value.trim() === "") {
        permission.textContent = "Please enter a valid age.";
        console.warn("Invalid input: The age is not a number.");
        return;
    }

    if (age === 0) {
        permission.textContent = "WTF?! You were just born";
    } else if (age >= 65) {
        permission.textContent = "You are too old for this website";
    } else if (age >= 18) {
        permission.textContent = "You are eligible to enter this website.";
    } else {
        permission.textContent = "Sorry bro, you are too young so not eligible!!";
        alert("LEAVE THE WEBSITE BEFORE FBI ARREST YOU");
    }
};


