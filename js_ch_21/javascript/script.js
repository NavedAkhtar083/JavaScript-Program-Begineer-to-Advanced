let allUserData=[
    
    {
        Name:"Khan",
        EmailId :"just@gmail.com",
        FatherName:"Akhtar",
        Password:"12345678",
        Address:"noida"

}];

let regform=document.querySelector(".registration-form");
let allInput=regform.querySelectorAll('input');
let textareaElement=document.querySelector('textarea');
let regbody=document.querySelector(".registration-tbody");


regform.onsubmit =(e) =>{
    e.preventDefault();
    let user ={
        Name:allInput[0].value,
        EmailId :allInput[1].value,
        FatherName:allInput[2].value,
        Password:allInput[3].value,
        Address:textareaElement.value


    } 
    

    const showuserdata = () =>{
        allUserData.forEach((item,index)=>{
           console.log(item)
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
        </tr> `
        })
    }
showuserdata();

}