let btn=document.querySelectorAll("button");
let h3=document.querySelectorAll("h3");



let cars=["name","roll",10,20,30,40];
toStringShowing=true;

btn[0].onclick =() =>{
    let result=cars.toString();
    if (toStringShowing) {
    h3[0].innerHTML="Array before converting into string>>>> " +"[" +cars+ "]";
    h3[1].innerHTML="Array after converting into string>>>>>> " +result;
    }
    else{
        h3[0].innerHTML = "";
        h3[1].innerHTML = "";
    }
    toStringShowing = !toStringShowing;  
};