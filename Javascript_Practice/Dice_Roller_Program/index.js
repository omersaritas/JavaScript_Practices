function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const result = document.getElementById("result");
    const images = document.getElementById("images");
    const values = [];
    const png = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        png.push(`<img src="images/${value}.png">`);
    }

    result.textContent = `Dice: ${values.join(', ')}`;
    images.innerHTML = png.join('');
}