                                                                                 ///            Fetch  API 
// const URL = "https://catfact.ninja/fact";
// let promise = fetch(URL);
// console.log(promise);  


// const URL = "https://catfact.ninja/fact";
// const getFacts = async () => {
//     console.log("getting data....");
//       let response = await fetch(URL);
//       console.log(response);   // json format
//       let data = await response.json();
//       console.log(data[0]);
// }
// console.log(getFacts());


const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");
const getFacts = async () => {
    console.log("Getting data...");
        let response = await fetch(URL);
        console.log(response);
        let data = await response.json();
        factPara.innerText = data[0].text;
};
btn.addEventListener("click", getFacts);

