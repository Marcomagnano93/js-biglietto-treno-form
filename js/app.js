//Usa l'ID per selezionare il bottone
let calc = document.getElementById("calc")

//crea un evento "click" per il bottone e dargli istruzioni
 calc.addEventListener("click",
    function() {

        let km
//istruzione 1: usare l'ID per il recupero dei dati km
    km = document.getElementById("distance")

let inputKm = km.value //number

//istruzione 1B: prendere l'età inserita dall'utente nel form
let nameSurname
//usare l'ID per il recupero dei dati
    nameSurname = document.getElementById("name_surname")

let inputName = nameSurname.value //string

//crea un prerequisito: km non possono essere 0, i km devono essere un numero, il nome non deve essere un numero e non può essere una stringa vuota
if (inputKm > 0 &&
    !isNaN(inputKm) &&
    isNaN(inputName) &&
    inputName != ""
    ) {


//istruzione 2: prendere l'età inserita dall'utente nel form
let age
//usare l'ID per il recupero dei dati
    age = document.getElementById("age")

let inputAge = age.value //string




//istruzione 3: dai un prezzo base ai km
let price = inputKm * 0.21; //number


//istruzione 4: aggiungi gli sconti in base alla option scelta dall'utente

let discount
//sconto under 18
    if(inputAge === "under 18"){
        discount = price * 0.20; //number
    } 
//sconto 18-65
    else if(inputAge !== "under 18" && inputAge !== "over 65"){
        discount = 0; //number
    }
//sconto 65+
    else{
        discount = price * 0.40; //number
    }
//Istruzione 5: calcola il prezzo finale e fai dislay in console
const finalPrice = (price - discount).toFixed(2); //string
        console.log(finalPrice + " euro")

//Istruzione 6A: fai display del prezzo nella pagina
        let viewPrice 
        viewPrice = document.getElementById("view_price"); //string
    
        viewPrice.innerHTML += `<span> ${price} </span>`//string

//Istruzione 6B: fai display dello sconto nella pagina
        let viewDiscount 
        viewDiscount = document.getElementById("view_discount"); //string

        viewDiscount.innerHTML += `<span> ${discount} </span>`//string

//istruzione 6C: fai display del prezzo finale nella pagina
        let viewFinalPrice 
        viewFinalPrice = document.getElementById("view_final_price"); //string

        viewFinalPrice.innerHTML += `<span> ${finalPrice} </span>`//string


//istruzione 6D: fai display del nome nella pagina
        let viewName 
        viewName = document.getElementById("view_name"); //string

        viewName.innerHTML += `<span> ${inputName} </span>`//string





    }
    

//Istruzione 8 dai un messaggio di errore se i dati non sono corretti
    else
    {
        alert("ATTENZIONE! I dati inseriti non sono corretti")
    }
        }
)




