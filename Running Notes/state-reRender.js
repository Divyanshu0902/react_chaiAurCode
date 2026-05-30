/*
I got a doubt that in reat while using useState hook, we destructure it in a const array like this :
const [state,setState] = useState(initial_value);
now, the value of state keeps changing so, how can we store it in a const variable named state?
The soln comes from the following JS concept -----
 */

 function greet(name){
    const message = `Hello ${name}! Nice to see you!`;
    return message;
 }

greet("divyanshu");
greet("rohit");
greet("priyanshu");

/* o/p:----
Hello Divyanshu! Nice to see you!
Hello Rohit! Nice to see you!
Hello Ronak! Nice to see you!
 */

// now in all these outputs , name is coming from the const variable. 
// but we are getting different values everytime.
// this is because, for every name, we are calling the greet function seperately
// so, every-time a new function scooe is created and although a const variable can't be reassigned in the same function scope,
// it can definitely be reassigned value in a different function call

// so similarly,
// everytime setState() is called a completely new state variable might be declared inside some function
// and then it might be reassigned the new value in a completely different function scope

// This is my intution, not some official info, I have yet to check whether this is true or not.