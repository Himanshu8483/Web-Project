// let isname=true;
// setInterval(() => {
//     document.title=isname?"Doctor Care":"Book  that Appointment";
//     if(isname==true){
//         isname = false;
//     }
//     else {
//         isname =true;
//     }
// }, 2000);
let checklogin=()=>{
console.log("working");

  let loginbtn=document.querySelector("#loginbtn")
  let logoutbtn=document.querySelector("#logoutbtn")

  if(localStorage.getItem("islogin") === "true"){
    loginbtn.style.display="none"
    logoutbtn.style.display="block"
  }else{
    logoutbtn.style.display="none"
    loginbtn.style.display="block"
  }

}


let signup=()=>{

    // Fetching input values from the form
    let signname = document.querySelector("#inpname").value;
    let signemail = document.querySelector("#inpemail").value;
    let signnum = document.querySelector("#inpnum").value;
    let signpass = document.querySelector("#inppass").value;
    let signcpass = document.querySelector("#inpcpass").value;

    // Fetching error message elements for each input field
    let errname = document.querySelector("#errorname");
    let erremail = document.querySelector("#erroremail");
    let errnumber = document.querySelector("#errornum");
    let errpass = document.querySelector("#errorpass");
    let errcpass = document.querySelector("#errorcpass");

    if (signname === "") {
        Swal.fire({
            position: "top-end",
            title: "Invalid!",
            icon: "error",
            text: "Please enter your name",
            customClass: {
                popup: 'swal2-popup-custom'
            },
            timer: 3000,
            showConfirmButton: false,
        });
        errname.innerHTML = "Please enter your name";  // Display error message
        return false;  // Stop the function execution and return false
    } else {
        errname.innerHTML = "";
    }

    if (signnum === "" || isNaN(signnum) || signnum.length !== 10) {
        Swal.fire({
            position: "top-end",
            title: "Invalid!",
            icon: "error",
            text: "Please enter a valid 10-digit number",
            customClass: {
                popup: 'swal2-popup-custom'
            },
            timer: 3000,
            showConfirmButton: false,
        });
        errnumber.innerHTML = "Please enter a valid 10-digit number";
        return false;
    } else {
        errnumber.innerHTML = "";
    }

    if (signemail === "" || !signemail.includes("@") || !signemail.includes(".com")) {
        Swal.fire({
            position: "top-end",
            title: "Invalid!",
            icon: "error",
            text: "Please enter a valid email",
            customClass: {
                popup: 'swal2-popup-custom'
            },
            timer: 3000,
            showConfirmButton: false,
        });
        erremail.innerHTML = "Please enter a valid email";
        return false;
    } else {
        erremail.innerHTML = "";
    }

    if (signpass.length < 6) {
        Swal.fire({
            position: "top-end",
            title: "Invalid!",
            icon: "error",
            text: "Password must be at least 6 characters long",
            customClass: {
                popup: 'swal2-popup-custom'
            },
            timer: 3000,
            showConfirmButton: false,
        });
        errpass.innerHTML = "Password must be at least 6 digit";
        return false;
    } else {
        errpass.innerHTML = "";
    }

    if (!(
        signpass.match(/[0-9]/) &&  // Checks if the password contains a number
        signpass.match(/[!@#$%^&*]/) &&  // Checks if the password contains a special symbol
        signpass.match(/[a-z]/) &&  // Checks if the password contains lowercase letters
        signpass.match(/[A-Z]/)  // Checks if the password contains uppercase letters
    )) {
        Swal.fire({
            position: "top-end",
            title: "Invalid!",
            icon: "error",
            text: "Password must be no, symbol, upper & lowercase letters",
            customClass: {
                popup: 'swal2-popup-custom'
            },
            timer: 3000,
            showConfirmButton: false,
        });
        errpass.innerHTML = "Password must be no, symbol, upper & lowercase letters";
        return false;
    } else {
        errpass.innerHTML= "";
    }

    if (signcpass !== signpass) {
        Swal.fire({
            position: "top-end",
            title: "Invalid!",
            icon: "error",
            text: "Passwords do not match",
            customClass: {
                popup: 'swal2-popup-custom'
            },
            timer: 3000,
            showConfirmButton: false,
        });
        errcpass.innerHTML = "Passwords do not match";
        return false;
    } else {
        errcpass.innerHTML = "";
    }
    

    localStorage.setItem("name", signname)
    localStorage.setItem("email", signemail)
    localStorage.setItem("number", signnum)
    localStorage.setItem("password", signpass)
    localStorage.setItem("islogin", "true");

    // alert("Sign up Successful! Redirecting to login page...");
    Swal.fire({         
        position: "top-end",
        title: "Signup Successful!",
        icon: "success",
        text: "Redirecting to Login page...",
        color:"green",
        timer: 3000,
        showConfirmButton: false,
    });
    location.href="login.html";
    return false;       // to not refresh page

}
let Bookk = () => {
    console.log(localStorage.getItem("islogin"));
    if (localStorage.getItem("islogin") === "true") {
        Swal.fire({         
            position: "top-end",
            title: "Successful!",
            icon: "success",
            text: "Redirecting to Booking Appointment page...",
            color:"green",
            timer: 3000,
            showConfirmButton: false,
        });
        location.href = "booking.html";
    } else {
        Swal.fire({         
            position: "top-end",
            title: "Invalid!!",
            icon: "error",
            text: "Please Login First",
            color:"brown",
            timer: 3000,
            showConfirmButton: false,
        });
        // alert("Please Login First!");
    }
};


let login=()=>{
    let loginname=document.querySelector("#loginname").value
    let loginpass=document.querySelector("#loginpass").value

    let localname=localStorage.getItem("name")
    let localpass=localStorage.getItem("password")

    if(loginname===localname && loginpass===localpass){
        Swal.fire({         
            position: "top-end",
            title: "Login Successful!",
            icon: "success",
            text: "Redirecting to Home page...",
            color:"green",
            timer: 3000,
            showConfirmButton: false,
        });
        location.href="index.html";
        localStorage.setItem("islogin", "true");


    }else {
            // library of alert 
            Swal.fire({         
                position: "top-end",
                title: "invalid Name or Password!",
                icon: "error",
                text: "Please Enter Correct Name & Password",
                color:"brown",
                timer: 3000,
                showConfirmButton: false,
            });
    
        // alert("invalid Name or Password")
    }

    // alert("Login Successful! Redirecting to Home page...");

    return false;
};


let logout=()=>{
    // localStorage.clear()
    // localStorage.removeItem("password")
    localStorage.removeItem("islogin")
    location.href="login.html"
}



// ==================================================
// Function to set background image to 1
let div1 = () => {
    let text = document.querySelector(".box");
    text.style.backgroundImage = "url('img/1.jpg')"; // Set background image
    text.style.backgroundSize = "cover"; // Ensures the image fits within the element
    text.style.backgroundRepeat = "no-repeat"; // Prevents image repetition
    text.style.backgroundPosition = "center"; // Centers the image within the element
}

// Function to set background image to 2
let div2 = () => {
    let text = document.querySelector(".box");
    text.style.backgroundImage = "url('img/2.jpg')";
    text.style.backgroundSize = "cover";
    text.style.backgroundRepeat = "no-repeat";
    text.style.backgroundPosition = "center";
}

// Function to set background image to 3
let div3 = () => {
    let text = document.querySelector(".box");
    text.style.backgroundImage = "url('img/3.jpg')";
    text.style.backgroundSize = "cover";
    text.style.backgroundRepeat = "no-repeat";
    text.style.backgroundPosition = "center";
}
// Function to set background image to 4
let div4 = () => {
    let text = document.querySelector(".box");
    text.style.backgroundImage = "url('img/4.jpg')";
    text.style.backgroundSize = "cover";
    text.style.backgroundRepeat = "no-repeat";
    text.style.backgroundPosition = "center";
}
// Function to set background image to 5
let div5 = () => {
    let text = document.querySelector(".box");
    text.style.backgroundImage = "url('img/5.jpg')";
    text.style.backgroundSize = "cover";
    text.style.backgroundRepeat = "no-repeat";
    text.style.backgroundPosition = "center";
}

// ==================================================

let swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// =================================
