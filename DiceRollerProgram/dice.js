let numOfDice; // Declare numOfDice in a broader scope

function rollDice() {
    numOfDice = parseInt(document.getElementById("dicenum").value, 10);
    const diceResult = document.getElementById("diceResult");
    const diceImgs = document.getElementById("diceImage");

    const values = [];
    const imgs = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6 + 1);
        values.push(value);
        imgs.push(`<img src="diceImages/${value}.png" alt="DICE ${value}" width="150px" height="150px">`);
    }

    diceResult.textContent = `Dice Values: ${values.join(', ')}`;
    diceImgs.innerHTML = imgs.join(' ');

    // Call rovena() after rolling the dice
    rovena();
}

function rovena() {
    const spcl = document.getElementById("spcl").value; // Get value from input
    const diceResult = document.getElementById("diceResult");
    const diceImgs = document.getElementById("diceImage");

    // Check if input matches the special phrase
    if (spcl === "ronaldo") {
        diceResult.textContent = "I LOVE YOU RONALDOO";
        diceImgs.innerHTML = ''; // Clear the dice images
        diceImgs.innerHTML += `<img src="diceImages/ronaldo.jpg" alt="Ronaldo" width="300px" height="300px">`;


    }
}
