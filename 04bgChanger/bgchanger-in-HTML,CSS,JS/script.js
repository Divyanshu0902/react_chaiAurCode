const allButtons = document.querySelectorAll(".button");

allButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        document.body.style.backgroundColor = button.innerText;
    })
})

// allButtons.forEach(button => {
//     button.onClick = ()=>{
//             document.body.style.backgroundColor = button.innerText
//     }
// })

const colours = ["violet","indigo","Blue","green","yellow","orange","red"];
let i=0,IntervalID=0;

document.querySelector(".auto").addEventListener("click",()=>{
    if(!IntervalID){
        IntervalID = setInterval(()=>{
            document.body.style.backgroundColor = colours[i];
            i++;
            if(i==colours.length){
                i=0;
            }
        },1000)
    }
})

document.querySelector(".stop").addEventListener("click",()=>{
    clearInterval(IntervalID);
    IntervalID=0;
})

