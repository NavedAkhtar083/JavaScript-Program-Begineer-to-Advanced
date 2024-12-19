let allheads = document.getElementsByClassName("btn_result");
console.log(allheads);
const demo = ( x,y) =>{
    console.log("demo");
    allheads[0].innerText= x +y;
}

const demo1 = (a,b) =>{
    console.log("demo");
    allheads[1].innerText=a*b;
}
const demo2 = (name) => {
    console.log("demo");
    allheads[2].innerText="name";
}
const demo3 = () =>{
    console.log("demo");
    allheads[1].innerText="5";
}
const demo4 = () =>{
    console.log("demo");
    allheads[1].innerText="5";
}
const demo5 = () =>{
    console.log("demo");
    allheads[1].innerText="5";
}
