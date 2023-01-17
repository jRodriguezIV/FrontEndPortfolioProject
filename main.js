// let log = console.log
const URL = "https://api.fda.gov"
let URLafter= ""
const KEY = ".json?api_key=bKom7JyWySs5BqcEmqXhdlkPJsokfGFeRF5at5r1"
const SEARCH = "&search="
const data1 = fetch(`${URL}/drug/label.json?limit=1`)
const data2 = fetch(`${URL}/drug/event.json?limit=1`)
let disc = document.getElementsByClassName("disc")
let re = document.getElementById("results")

let form = document.querySelector("form")
let input = document.querySelector("input")
// const JSON = ".json?"


//Initial Disclaimer Fetch
fetch (
    `${URL}/drug/label${KEY}`
).then((response)=>response.json())
    .then((result)=>{

        let p = document.createElement("p")
        p.setAttribute("class", "discp")
        disc[0].append(p)
        p.textContent = result.meta.disclaimer
        // console.log(disc[0])

    })
    // console.log(form)

    form.addEventListener("submit", (event)=> {
        
        event.preventDefault();
        // console.log(input.value)
        
        fetch (

            `${URL}/drug/drugsfda${KEY}${SEARCH}${input.value.split(" ").join("+")}&limit=20`
            ).then((response)=> {
                return response.json()
            })
            .then((result)=>{
                console.log(result.headers)
                console.log(input.value.split(" ").join("+"))
                
                // re.innerHTML=""


               


                result.results.forEach((el) =>{
                    if (el.openfda) { 
                        console.log(el) //.products[0].brand_name  .marketing_status !== "Discontinued"
                    let p = document.createElement("p") 
                    p.setAttribute("class", "resultsp")
                    re.appendChild(p)

                    p.innerHTML = `
                    <span><b>Brand Name:</b><br>${el.openfda.brand_name}</br></span>
                    <span><b>Generic Name</b><br>${el.openfda.generic_name}</br></span>
                    <span><b>EPC:</b><br>${el.openfda.pharm_class_epc}</br></span>
                    <span><b>Manufacturer:</b><br>${el.openfda.manufacturer_name}</br></span>
                    <span><a>
                    

                    
                    `
                    }
                } )



            }).catch(err => console.log(err))
        //add fetch here
    })







        //  API LINK : https://open.fda.gov/apis/anatomy-of-a-response/
        // going to create a drop down after search is made, labeled with Searchable Fields to relay information of choice.
        // will also add a list of "important" fields at default after search.
        // will brainstorm on how to create a list of all the current drugs labels.
        // will brainstorm on another button(random or drop) for those who can't think of a drug to search.
        // product_type, generic_name, brand_name, substance_name, is_origina_packager,


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