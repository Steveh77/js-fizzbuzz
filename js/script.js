console.log("JS OK")

// Scrivi un programma che stampi in console i numeri da 1 a 100,
// per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.



// stampare in console numeri da 1 a 100
/* per i multipli di 3 stampi “Fizz” al posto del numero e 
 per i multipli di 5 stampi “Buzz” */
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
    console.log("Fizz")
    }else if (i % 5 === 0 && i % 3 !== 0) {
    console.log("Buzz")
    }else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    }else{
        console.log(i)
    }
}





