const URL = "https://api.fda.gov"
const KEY = ".json?api_key=bKom7JyWySs5BqcEmqXhdlkPJsokfGFeRF5at5r1"
const SEARCH = "&search="
let disc = document.getElementsByClassName("disc")
let re = document.getElementById("results")
let val = localStorage.val


fetch (
    `${URL}/drug/label.json?${SEARCH}"${val.split(" ").join("+")}"limit=20`
).then((response)=>{
    if (!response.ok) {
        alert("Please Enter a Valid Medication")
    } else {
    return response.json()
    }
})
.then((result)=>{
        let p = document.createElement("p")
        p.setAttribute("class", "discp")
        disc[0].append(p)
        p.textContent = result.meta.disclaimer
        
        result.results.forEach((el) =>{



                let p = document.createElement("p") 
                p.setAttribute("class", "resultsp")
                re.appendChild(p)
            
                p.innerHTML = 
                `
                <span><b>${val.charAt(0).toUpperCase() + val.slice(1)}</b></span>
                <span><b>Overdosage Information:</b><br>${el.overdosage[0]}</span>
                <span><b>Adverse Reactions:</b><br>${el.adverse_reactions[0]}</span>
                <span><b>Pregnancy:</b><br>${el.pregnancy[0]}</span>
                <span><b>Warnings and Cautions:</b><br>${el.warnings_and_cautions[0]}</span>
                <span><b>Boxed Warning:</b><br>${el.boxed_warning[0]}</span>

                `

            

    })
}).catch((error)=>console.log(error))