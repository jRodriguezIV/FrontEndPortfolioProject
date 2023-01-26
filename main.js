// let log = console.log
const URL = "https://api.fda.gov"
let URLafter= ""
const KEY = ".json?api_key=bKom7JyWySs5BqcEmqXhdlkPJsokfGFeRF5at5r1"
const SEARCH = "&search="
let disc = document.getElementsByClassName("disc")
let re = document.getElementById("results")
let link = document.getElementById("link")
let val = ""
let body2 = document.getElementById("body2")


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
        
    }).catch(error=>console.log(error))
    // console.log(form)
    
    form.addEventListener("submit", (event)=> {
        
        event.preventDefault();
        val = input.value
        localStorage.setItem("val", input.value)
        // console.log(input.value)
        
        fetch (
            
            `${URL}/drug/drugsfda${KEY}${SEARCH}${input.value.split(" ").join("+")}&limit=20`
            ).then((response)=> { 
                if (!response.ok) {
                alert("Please Enter a Valid Medication")
            } else {
            return response.json()
            }
        }).then((result)=>{
            if(result) {
                console.log(result)
                let a = document.querySelector("a")
                let p = document.createElement("p")
                a ? a.remove() : console.log("nothing")
                p.innerHTML = `<strong><a id="link" href="javascript:void(0)" onClick="events()">Warnings</a></strong>`
                // <a id="link" href="javascript:null" onClick="javascript:events()">Events</a>
                form.after(p)
                
                
                re.innerHTML = ""
            

               


                result.results.forEach((el) =>{
                    if (el.openfda) { 
                        if (Object.keys(el.openfda).length > 0) {
                        console.log(el) //.products[0].brand_name  .marketing_status !== "Discontinued"
                        let p = document.createElement("p") 
                        p.setAttribute("class", "resultsp")
                        re.appendChild(p)
                    
                    p.innerHTML = `
                    <span><b>Brand Name:</b><br>${el.openfda.brand_name}</span>
                    <span><b>Generic Name:</b><br>${el.openfda.generic_name}</span>
                    <span><b>EPC:</b><br>${el.openfda.pharm_class_epc}</span>
                    <span><b>Manufacturer:</b><br>${el.openfda.manufacturer_name}</span>
                    <span><b>Substance Name:</b><br>${el.openfda.substance_name}</span>
                    <span><b>Product Type:</b><br>${el.openfda.product_type}</span>
                    <span><b>Route:</b><br>${el.openfda.route}</span>
                    `

                    }}
                })
                
            }
            }).catch((err) => console.log(err))
            //
        })
        
        
        function events(e) {
            window.location.href = "./index2.html"
            
            
            // fetch (
                //     `${URL}/drug/event${KEY}${SEARCH}${input.value.split(" ").join("+")}&limit=20`
                // ).then(response => response.json()
                // ).then(result => {
                    //     console.log(result)
                    
                    
                    // }).catch(error=>console.log(error))
                    
                    
                    //  window.history.replaceState("/index2.html" )
                    
                    
                }
                
                
                
                
                
                

    
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