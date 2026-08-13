function message(name){
    console.log(`Instant Message : Hi ${name}!!`);
    
    setTimeout(() => {
        console.log(`Delayed Message : Hello ${name}`)
    },3000)
}

message("Divyanshu");