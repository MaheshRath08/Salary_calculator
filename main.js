//input
let bsEl = document.getElementById("bs")
let hraEl = document.getElementById("hra")
let daEl = document.getElementById("da")
let caEl = document.getElementById("ca")
let saEl = document.getElementById("sa")
let medEl = document.getElementById("med")
let epfEl = document.getElementById("epf")

//button
let sub = document.getElementById("sub")
let form = document.querySelector(".form")
let close = document.getElementById("close")

//UI
let input = document.querySelector(".take")
let output = document.querySelector(".output")

//output
let bso = document.getElementById("bso")
let hrao = document.getElementById("hrao")
let dao = document.getElementById("dao")
let cao = document.getElementById("cao")
let sao = document.getElementById("sao")
let medo = document.getElementById("medo")
let epfo = document.getElementById("epfo")
let gs = document.getElementById("gs")
let ded = document.getElementById("ded")
let net = document.getElementById("net")

//constions 
isChecked = false

form.addEventListener("submit", ()=>{
    if(isChecked){
        input.style.visibility = "hidden"
        output.style.visibility = "visible"
    }
    //values
    let bs = Number(bsEl.value)
    let hra = Number(hraEl.value)
    let da = Number(daEl.value)
    let ca = Number(caEl.value)
    let sa = Number(saEl.value)
    let med = Number(medEl.value)
    let epf = Number(epfEl.value)
    
    //calc
    let hraV = bs*(hra/100)
    let daV = bs*(da/100)
    let medV = bs*(med/100)
    let epfV = bs*(epf/100)
    let gsV = bs+hraV+daV+ca+sa
    let dedV = medV+epfV
    let netV = gsV-dedV

    //assign
    bso.textContent = bs
    hrao.textContent = hraV
    dao.textContent = daV
    cao.textContent = ca
    sao.textContent = sa
    gs.textContent = gsV
    medo.textContent = medV
    epfo.textContent = epfV
    ded.textContent = dedV
    net.textContent = netV 

    check(bs)
})

//close function
close.addEventListener("click" ,()=>{
    input.style.visibility = "visible"
    output.style.visibility = "hidden"
})

function check(e){
    
    if(isNaN(e) || e===0){
        alert("Provide valid input!!")
        isChecked = false
    }else{
        isChecked = true
    }
}