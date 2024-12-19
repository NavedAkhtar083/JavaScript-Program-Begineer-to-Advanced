const startImage =()=>{
    let bgImage =document.querySelector(".bg-img");
    bgImage.classList.add("bgImage")

}

const stopImage =()=>{
    let bgImage =document.querySelector(".bg-img");
    bgImage.classList.remove("bgImage")

}

const startColor =()=>{
    let bgColor =document.querySelector(".color-box");
    bgColor.classList.add("bgColor")

}

const stopColor =()=>{
    let bgColor =document.querySelector(".color-box");
    bgColor.classList.remove("bgColor")

}

const startLoader=()=>{
    let move =document.querySelector(".loader");
    move.classList.add("move")

}

const stopLoader =()=>{
    let move =document.querySelector(".loader");
    move.classList.remove("move")

}

const startCircle=()=>{
    let zoom =document.querySelector(".circle-box");
    zoom.classList.add("zoom")

}

const stopCircle =()=>{
    let zoom =document.querySelector(".circle-box");
    zoom.classList.remove("zoom")

}
