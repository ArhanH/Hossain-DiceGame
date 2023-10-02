function diceRandomizer(){
    return Math.floor(Math.random() * 6) + 1;
}

function diceRoll(){
    var dice1 = diceRandomizer();
    var dice2 = diceRandomizer();
    var diceSum = dice1 + dice2;
    document.getElementById('dice1').textContent = 'Dice 1:' + dice1;
    document.getElementById('dice2').textContent = 'Dice 2:' + dice2;
    document.getElementById('diceSum').textContent = 'Total Amount:' + diceSum;
}





