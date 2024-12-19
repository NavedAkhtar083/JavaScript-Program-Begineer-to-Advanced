
let userinfo;
let navBrand =document.querySelector('.navbar-brand');
let logoutbtn =document.querySelector('.login-btn');

if (sessionStorage.getItem("__au__") == null)
{
    window.location="../index.html";
    
}
userinfo=JSON.parse(sessionStorage.getItem("__au__"));
navBrand.innerHTML=userinfo.hotelname;
console.log(userinfo);

logoutbtn.onclick =() =>{
    logoutbtn.innerHTML="please wait ......."
    setTimeout(()=>{
        logoutbtn.innerHTML="logout";
        sessionStorage.removeItem('__au__');
        window.location="../index.html"

    },3000)
    
}
