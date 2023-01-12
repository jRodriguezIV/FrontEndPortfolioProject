// let log = console.log
const URL = "https://api.fda.gov"
const KEY = ".json?api_key=bKom7JyWySs5BqcEmqXhdlkPJsokfGFeRF5at5r1"
const data1 = fetch(`${URL}/drug/label.json?limit=1`)
const data2 = fetch(`${URL}/drug/event.json?limit=1`)
let disc = document.getElementsByClassName("disc")
let p = document.createElement("p")
let button = document.querySelector("button")
let input = document.querySelector("input")
// const JSON = ".json?"


//Initial Disclaimer Fetch
fetch (
    `${URL}/drug/event${KEY}`
).then((response)=>response.json())
    .then((result)=>{
        console.log(result.meta.disclaimer)
        disc[0].append(p)
        p.textContent = result.meta.disclaimer
        console.log(disc[0])

    })
    console.log(button)

    button.addEventListener("click", (event)=> {
        event.preventDefault;
        console.log(input.value)

        //add fetch here
    })



    fetch (
        `${URL}/drug/label${KEY}`
    ).then((response)=>response.json())
        .then((result)=>{
            console.log(result)
        })




// Promise.all([data1, data2])
//     .then((response) => response.forEach((res) => {

//         promise(res.json())

//     }))
//     .catch((error=>console.log(error)))

//     let promise = (prom) => {
//         prom.then()
//     }

 






// fetch(
//     `${URL}/drug.json?limit=1`
// ).then((response) => response.json())
//     .then((result) => {



//         console.log(result.results[0])
//     }).catch((err) => console.log(err))