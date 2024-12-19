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
    if( allInput[0].value != "" &&
        allInput[1].value != "" &&
        allInput[2].value != "" && 
        allInput[3].value != "" && 
        textareaElement != "")
    {
        allUserData.push(user);
        let string=JSON.stringify(allUserData);
        localStorage.setItem("allUserData" ,string)
        swal("Good job!", "You clicked the button!", "success");
        showuserdata() 
    } 
    else{
        swal(" Empty Fields!!", "Fill the empty fields !!" ,'warning');
    }
 
}
const showuserdata = () =>{
    regbody.innerHTML=" ";
    allUserData.forEach((item,index)=>{
       regbody.innerHTML +=`
       <tr>
            <td>${index+1}</td>
            <td>${item.Name}</td>
            <td>${item.EmailId}</td>
            <td>${item.FatherName}</td>
            <td>${item.Password}</td>
            <td>${item.Address}</td>
            <td>
                <button class="btn edit-btn btn-success">
                    <i class="fa fa-edit"></i>
                </button>
                <button class="btn del-btn btn-danger">
                    <i class="fa fa-trash"></i>

                </button>
            </td>
    </tr>`
   
    })
    let deleteData =regbody.querySelectorAll(".del-btn");
    deleteData.forEach((el,index) =>{
    el.onclick = () =>
        {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                allUserData.splice(index,1);
                localStorage.setItem("allUserData",JSON.stringify(allUserData));
                showuserdata()
                swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } 
            else 
            {
              swal("Your imaginary file is safe!");
            }
          }); 
        }
    });

    //edit coding --------------------->>>>

    let allEditBtn=regbody.querySelectorAll(".edit-btn");
    console.log(allEditBtn)
    allEditBtn.forEach((el,index) =>{
        el.onclick =() =>{
            let tr=el.parentElement.parentElement;
            let alltd=tr.querySelectorAll('td');
            alltd.forEach((el,index) =>{
                if(index == 6 || index == 7){
                    el.contentEditable= false;
                
                }
                else 
                {
                    el.contentEditable= true;
                    el.style.border="2px solid red";
                }
        let btntd= alltd[alltd.length-1];
        let editbtn=btntd.querySelector("button");
        editbtn.innerHTML="<i class='fa fa-save'></i>"
        
                        })
        }
    })
}
showuserdata();
