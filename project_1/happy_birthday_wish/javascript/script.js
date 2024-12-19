let container =document.querySelector(".container");
let box=document.querySelector(".box");
let h1=box.querySelector("h1")

let time =10;

let clear= setInterval (() =>{
    time--;
    h1.innerText=time;
    if (time <= 5){
        h1.style.color="red";
        h1.style.fontSize='60px';
        box.style.border="30px groove red";
        container.style.border="30px groove green";
    }
    

},1000);

setTimeout ( () =>{
    container.innerHTML=`
      <div class="img-box" >
            <h1>Happy Birthday  </h1>
            <img  src="img/female.avif" >
    </div> `;
    clearInterval(clear);
},11000);
 