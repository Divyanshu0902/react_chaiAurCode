const allButtons = document.querySelectorAll(".button");

// allButtons.forEach(function(button) {
//     button.addEventListener("click",function() {
//         document.body.style.backgroundColor = button.innerText;
//     })
// })

// allButtons.forEach((button)=>{
//     button.addEventListener("click",()=>{
//         document.body.style.backgroundColor = button.innerText;
//     })
// })

allButtons.forEach(button => {
    button.onClick = ()=>{
            document.body.style.backgroundColor = button.innerText
    }
})

