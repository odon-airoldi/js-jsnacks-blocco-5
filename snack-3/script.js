const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]


// for loop
let increasedNumber = []

for(let i = 0; i < numbers.length; i++) {

    const number = numbers[i];

    increasedNumber.push(number + 1)

}

console.log(increasedNumber)

// map array method

increased_number = numbers.map(function(number) {

    return number + 1
    
})

console.log(increased_number)