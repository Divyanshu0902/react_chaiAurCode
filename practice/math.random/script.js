document.querySelector(".roll").addEventListener("click",()=>{
    const rollResult = Math.floor(Math.random()*6)+1
    document.querySelector(".result").innerText = rollResult
})