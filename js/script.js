console.log("JS OK")

// Scrivi un programma che stampi in console i numeri da 1 a 100,
// per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.



// stampare in console numeri da 1 a 100
/* per i multipli di 3 stampi “Fizz” al posto del numero e 
 per i multipli di 5 stampi “Buzz” */

const blackboard = document.getElementById("blackboard")
const fizz = "Fizz"

function Start() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log("Fizz")
            blackboard.innerText += ' ' + 'fizz';
    
        }else if (i % 5 === 0 && i % 3 !== 0) {
            console.log("Buzz")
            blackboard.innerText += ' ' + 'Buzz';
    
        }else if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
            blackboard.innerText += ' ' + 'FizzBuzz';
    
        }else{
            console.log(i) 
            blackboard.innerText += ' ' + i;
            
        }
    }
}


// document.getElementById('blackBoard').innerHTML = '<div class="col-1 cells verde border"></div>'




