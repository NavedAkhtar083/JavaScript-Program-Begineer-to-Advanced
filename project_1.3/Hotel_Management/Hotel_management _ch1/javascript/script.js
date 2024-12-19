let allUserInfo = [];
let regform = document.querySelector(".reg-form");
let Loginform = document.querySelector(".login-form");
let allinput = regform.querySelectorAll("input");
let allLogininput = Loginform.querySelectorAll("input");
let regBtn =regform.querySelector("button");
let loginBtn =Loginform.querySelector("button");

// Load existing user info from localStorage if it exists
if (localStorage.getItem("allUserInfo") != null) {
    allUserInfo = JSON.parse(localStorage.getItem("allUserInfo"));
}

console.log(allUserInfo);

// Registration coding......................

regform.onsubmit = (e) => {
    e.preventDefault();  // Prevent form submission

    // Check if the email is already registered
    let checkemail = allUserInfo.find((data) => {
        return data.emailid === allinput[4].value;
    });

    if (checkemail === undefined) {
        // Collect form data into an object
        let data = {
            fullname: allinput[0].value,
            hotelname: allinput[1].value,
            hotelroomstotal: allinput[2].value,
            mobilenumber: allinput[3].value,
            emailid: allinput[4].value,
            password: allinput[5].value,
        };

        regBtn.innerText="Processing......"
        setTimeout(()=>{
            regBtn.innerText="Register"
            // Add new user info to the array and save it to localStorage
            allUserInfo.push(data);
            localStorage.setItem("allUserInfo", JSON.stringify(allUserInfo));
            
            // Show success message
            swal("Good job!", "You registered successfully!", "success");

        },2000)

        

        

    } else {
        // Show warning message if email is already used
        swal("Failed!", "This email is already used!", "warning");
    }
};


//Login Coding .............................
Loginform.onsubmit=(e)=>{
    e.preventDefault();
    if(allLogininput[0].value != " ")
    {
        // alert(allLogininput[0].value)
        if(allLogininput[1].value!= " ")
        {
            // check email in your database
            let checkemail =allUserInfo.find((data)=>{
                return(
                    data.emailid == allLogininput[0].value
                );
            });
            // console.log(checkemail);
            if(checkemail != undefined)
            {
                // Match password
                if (checkemail.password == allLogininput[1].value)
                {
                    loginBtn.innerText = "Please Wait ...";
                    setTimeout(() =>{
                        loginBtn.innerText = "Login Success";
                        window.location="profile/profile.html";
                    },2000)


                }
                else
                {
                    swal('Warning',' Wrong Password ' ,'warning')

                }

            }
            else
            {
                swal('Warning',' Wrong Email ' ,'warning')

            }


        }
        else
        {
            swal('Warning','Password is Empty' ,'warning')

        }

    }
    else
    {
        swal('Warning','Email is Empty' ,'warning')

    }
}