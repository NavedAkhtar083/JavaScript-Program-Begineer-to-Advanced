let allUserInfo = [];
let regform = document.querySelector(".reg-form");
let allinput = regform.querySelectorAll("input");

// Load existing user info from localStorage if it exists
if (localStorage.getItem("allUserInfo") != null) {
    allUserInfo = JSON.parse(localStorage.getItem("allUserInfo"));
}

console.log(allUserInfo);

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

        // Add new user info to the array and save it to localStorage
        allUserInfo.push(data);
        localStorage.setItem("allUserInfo", JSON.stringify(allUserInfo));
        
        // Show success message
        swal("Good job!", "You registered successfully!", "success");

    } else {
        // Show warning message if email is already used
        swal("Failed!", "This email is already used!", "warning");
    }
};
