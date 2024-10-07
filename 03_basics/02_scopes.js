// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}

// getComputedStylelobal scope main aap jo bhi likhenge wo scope main available rahegi magar jo bhi scope main likh hua hai wo bahr available nahi hona cahiye 

// ye jo bhi if ke andar likha hua hai wo hai block scope  and uske bahar jo bhi likha hua hai wo hai global scope

//{} ye scope hai,ye kisi function ke saath aata hai ya kisi if-else ke saath aata hai to isko scope bolte hain wahan 

// console.log(a);
// console.log(a);
// console.log(b);

function one(){
    const username = "shadab"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);    //line by line execute ho raha hai
//jub nested function ho to child apne parent ke variable ko access kar sakte hain
    two()
}

one()

if (true) {
    const username = "shadab"
    if (username === "shadab") {
        const website = " youtube"
        // console.log(username + website);      
    }
    // console.log(website);  //is laine main error aayegi kyunki uska scope ke bahar access karne ki kosis kar rahe hain
}
// console.log(username);   //is laine main error aayega kyunki uska scope ke bahar access karne ki kosis kar rahe hain


// +++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1
}



addTwo(5)  //yahan error aayega kyunki is wale way main declaration se pehle aap usko use nahi kar sakte

const addTwo = function(num){
    return num + 2
}