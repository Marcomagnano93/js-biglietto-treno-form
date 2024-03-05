//prendere i km inseriti dall'utente nel form


let km

    km = document.getElementById("distance")

let inputKm = km.value //number




//prendere l'età inserita dall'utente nel form
let age

    age = document.getElementById("age")

let inputAge = age.value //string

console.log(inputAge)


//calcola il prezzo premendo sul bottone



//dai un prezzo ai km
let price = inputKm * 0.21; //number


//aggiungi gli sconti

let discount
    if(inputAge === "under 18"){
        discount = price * 0.20; //number
    } 
    else if(inputAge !== "under 18" && inputAge !== "over 65"){
        discount = 0; //number
    }
    else{
        discount = price * 0.40; //number
    }

const finalPrice = (price - discount).toFixed(2); //string



//stampa il prezzo finale nel bottone

let calc = document.getElementById("calc")


  let display = calc.addEventListener("click",
    function() {
        console.log(finalPrice)
    let view 
    view = document.getElementById("viewprice");

    view.innerHTML += `<span> ${finalPrice} </span>`

    }
)