let input=document.querySelector("input");
let allbutton =document.querySelectorAll("button");
let h2=document.querySelector("h2");
let x="hello";
console.log(input);
console.log(allbutton);

allbutton[0].onclick = (e) =>{
    e.preventDefault();
    let datalength=input.value.length;
    console.log(datalength);
    h2.innerHTML=datalength;
}

allbutton[1].onclick = (e) =>{
    e.preventDefault();
    let inputvale=input.value;
    let lastcharatar=inputvale[inputvale.length-1]
    console.log(lastcharatar);
    h2.innerHTML=lastcharatar;
}

allbutton[2].onclick = (e) =>{
    e.preventDefault();
    x.match("hello") ? h2.innerHTML="matched":h2.innerHTML="not-matched";
}
   
