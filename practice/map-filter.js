// const arr = [
//     {name:"Divyanshu", age: 21},
//     {name:"Privyanshu", age: 18},
//     {name:"Ramesh", age: 35},
//     {name:"Rajesh", age: 41},
//     {name:"Mohan", age: 25},
// ]

// const arr2 = arr.filter((x)=>{
//     return x.age >25
// })

// console.log(arr2)

// const arr3 = arr2.map((x)=>{return x.name})

// console.log(arr3)

//-------------------------------------------------------------------
// Filtering even Number from an array of natueal no.s and printing their squares :

// const num = [1,2,3,4,5,6,7,8,9]

// const even = num.filter((n) => {
//     return n%2==0
// })

// const squares = even.map((n) => {
//     return n*n;
// })

// console.log(squares)

// ***consise format of the whole series of operations written above :--
// console.log(num.filter(n=>n%2==0).map(n=>n*n))


//------------------------------------------------------------------------
// printing the items and 10% discounted prices for items worth 1000 and less

const items = [
    {item : "Brush", price : "25", qty: 5},
    {item : "Bottle", price : "250", qty: 2},
    {item : "Bed", price : "850", qty: 1},
    {item : "Cupboard", price : "2500", qty: 1},
    {item : "Guitar", price : "4000", qty: 2},
    {item : "Bag", price : "450", qty: 5}
]

items2 = items.filter(i=>i.price<=500);

console.log(items2);

items3 = items2.map(i=>{
    return {
        name: i.item,
        price: i.price,
        discountedPrice : i.price*0.9
    }
})

console.log(items3)