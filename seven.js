let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("Deepak")
    let a = 7;
    a++;
    console.log(a);
}


let btn1 = document.querySelector("#btn1");
btn1.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
}


// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("You are inside in div");
// }

// let div = document.querySelector("div");
// div.addEventListener("click", (e) =>{
//     console.log("Deepak");
//     console.log(e.type);
//     console.log(e.target);
// } );


// let div = document.querySelector("div");
// div.style.cursor = "pointer";
// div.addEventListener("click", (e) =>{
//     console.log("Deepak Handler-1"); 
// } );
// div.addEventListener("click", () =>{
//     console.log("Deepak Handler-2");
// } );
// const handler3 = () =>{
//     console.log("Deepak Handler-3");
// };
// div.addEventListener("click", handler3)
// div.addEventListener("click", () =>{
//     console.log("Deepak Handler-4");
// } );
// div.removeEventListener("click",handler3);   /// remove



//      practice Question

// let Btnmode = document.querySelector("#mode");
let Btnmode = document.getElementById("mode");

let Currentmode = "light";
Btnmode.addEventListener("click", () =>{
    if(Currentmode === "light"){
        Currentmode = "pink";
        document.querySelector("body").style.backgroundColor = "pink";
         document.querySelector("body").remove = "white";
    } else {
        document.querySelector("body").style.backgroundColor = "white";
         document.querySelector("body").remove = "pink";
        Currentmode = "light";
       
    }
    console.log(Currentmode);
});





