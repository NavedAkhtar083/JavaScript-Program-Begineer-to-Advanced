let allUserData=[
    
    {
        Name:"Khan",
        EmailId :"just@gmail.com",
        FatherName:"Akhtar",
        Password:"12345678",
        Address:"noida"

},
{
        Name:"alok",
        EmailId :"just@gmail.com",
        FatherName:"Akhtar",
        Password:"12345678",
        Address:"noida"
    }

];

let regform=document.querySelector(".registration-form");
let allInput=regform.querySelectorAll('input');
let textareaElement=document.querySelector('textarea');
let regbody=document.querySelector(".registration-tbody");
console.log(regbody);


regform.onsubmit =(e) =>{
    e.preventDefault();
    let user ={
        Name:allInput[0].value,
        EmailId :allInput[1].value,
        FatherName:allInput[2].value,
        Password:allInput[3].value,
        Address:textareaElement.value
    } 
    allUserData.push(user);
    let string=JSON.stringify(allUserData);
    localStorage.setItem("allUserData" ,string)
    
    

    const showuserdata = () =>{
        
        allUserData.forEach((item,index)=>{
           regbody.innerHTML +=`
           <tr>
                <td>${item.Name}</td>
                <td>${item.EmailId}</td>
                <td>${item.FatherName}</td>
                <td>${item.Password}</td>
                <td>${item.Address}</td>
                <td>
                    <button class="btn btn-success">
                        <i class="fa fa-edit"></i>
                    </button>
                    <button class="btn btn-danger">
                        <i class="fa fa-trash"></i>

                    </button>
                </td>
        </tr>`
       
        })
        console.log(allUserData);
    }
showuserdata();


}