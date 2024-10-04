// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}

// getComputedStylelobal scope main aap jo bhi likhenge wo scope main available rahegi magar jo bhi scope main likh hua hai wo bahr available nahi hona cahiye 

// ye jo bhi if ke andar likha hua hai wo hai block scope  and uske bahar jo bhi likha hua hai wo hai global scope

//{} ye scope hai,ye kisi function ke saath aata hai ya kisi if-else ke saath aata hai to isko scope bolte hain wahan 

// console.log(a);
// console.log(b);
console.log(a);


