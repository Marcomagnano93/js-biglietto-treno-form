//prendere i km inseriti dall'utente nel form


let km

    km = document.getElementById("distance")

let inputKm = km.value

    console.log(inputKm)


//prendere l'età inserita dall'utente nel form
let age

    age = document.getElementById("age")

let inputAge = age.value

    console.log(inputAge)


//calcola il prezzo premendo sul bottone



//dai un prezzo ai km
let price = inputKm * 0.21; //number


//aggiungi gli sconti





//stampa il prezzo finale nel bottone

let calc = document.getElementById("calc")

  let display = calc.addEventListener("click",
    function() {
        console.log(price)
    }
)