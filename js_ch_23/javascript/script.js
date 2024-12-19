let allUserData=[];

let regform=document.querySelector(".registration-form");
let allInput=regform.querySelectorAll('input');
let textareaElement=document.querySelector('textarea');
let regbody=document.querySelector(".registration-tbody");

if(localStorage.getItem("allUserData") != null){
let string=localStorage.getItem("allUserData");
allUserData=JSON.parse(string);

}


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



    
   showuserdata()  
    

    
   
    

   
}
const showuserdata = () =>{
    regbody.innerHTML=" ";
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
                <button class="btn del-btn btn-danger">
                    <i class="fa fa-trash"></i>

                </button>
            </td>
    </tr>`
   
    })
    let deleteData =regbody.querySelectorAll(".del-btn");
// console.log(deleteData);
    deleteData.forEach((el,index) =>{
    el.onclick = () =>{
        allUserData.splice(index,1);
        localStorage.setItem("allUserData",JSON.stringify(allUserData));
        showuserdata()
    }

   
    })
   
  
}
showuserdata();
