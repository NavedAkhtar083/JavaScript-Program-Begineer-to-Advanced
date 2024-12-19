// let name="helloword";
// let password="12345678";
let correct ="<i  style='color:green' class='fa-solid fa-check'></i>";
let wrong="<i style='color:red' class='fa-solid fa-circle-exclamation'></i>";
let allinput =document.querySelectorAll('input');
// let loginbtn=document.querySelector('button');
// let colorbtn=document.querySelector('button');
// let show=document.querySelector('p');
let allspan=document.querySelectorAll('span');
let form =document.querySelector('form');
console.log(form);
console.log(allinput);

// allinput[0].onblur =(e) => {
//     let el =e.target;
//     el.value === "" ? el.style.borderColor='red': el.style.borderColor='green';
// }
const secondvalidation = () =>{
    let el =allinput[1];
    el.value == "" ? el.style.borderColor='red': el.style.borderColor='green';
    el.value== "" ? allspan[1].innerHTML =wrong: allspan[1].innerHTML =correct ; 
}
const firstvalidation = () =>{
    let el =allinput[0];
    el.value == "" ? el.style.borderColor='red': el.style.borderColor='green';
    el.value== "" ? allspan[0].innerHTML =wrong: allspan[0].innerHTML =correct ; 

}
const thirdvalidation = () =>{
    let el =allinput[2];
    el.value == "" ? el.style.borderColor='red': el.style.borderColor='green';
    el.value== "" ? allspan[2].innerHTML =wrong: allspan[2].innerHTML =correct ; 
}
const fourthvalidation = () =>{
    let el =allinput[3];
    el.value == "" ? el.style.borderColor='red': el.style.borderColor='green';
    el.value== "" ? allspan[3].innerHTML =wrong: allspan[3].innerHTML =correct ; 
}
const fifthhvalidation = () =>{
    let el =allinput[4];
    el.value == "" ? el.style.borderColor='red': el.style.borderColor='green';
    el.value== "" ? allspan[4].innerHTML =wrong: allspan[4].innerHTML =correct ; 
}
const sixthvalidation = () =>{
    let el =allinput[5];
    el.value == "" ? el.style.borderColor='red': el.style.borderColor='green';
    el.value== "" ? allspan[5].innerHTML =wrong: allspan[5].innerHTML =correct ; 
}
form.onsubmit = (e) =>{
    e.preventDefault();
    firstvalidation();
    secondvalidation();
    thirdvalidation();
    fourthvalidation();
    fifthhvalidation();
    sixthvalidation();

    // let el =allinput[0];
    // el.value === "" ? el.style.borderColor='red': el.style.borderColor='green';
    // el.value=== "" ? allspan[0].innerHTML =wrong : allspan[0].innerHTML =correct ; 


}

// const thirdvalidation = (e) =>{
//     let el =allinput[2];
//     el.value === "" ? el.style.borderColor='red': el.style.borderColor='green';
// }
// const fourthvalidation = (e) =>{
//     let el =allinput[3];
//     el.value === "" ? el.style.borderColor='red': el.style.borderColor='green';
// }
// const fifthvalidation = (e) =>{
//     let el =allinput[4];
//     el.value === "" ? el.style.borderColor='red': el.style.borderColor='green';
// }
// const sixthvalidation = (e) =>{
//     let el =allinput[5];
//     el.value === "" ? el.style.borderColor='red': el.style.borderColor='green';
// }


// loginbtn.onclick = ()=>{
//     fisrtvalidation();
//     secondvalidation();
//     thirdvalidation();
//     fourthvalidation();
//     fifthvalidation();
//     sixthvalidation();    
// }