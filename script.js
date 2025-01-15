

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
        errname.innerHTML = "Please enter your name";  // Display error message
        return false;  // Stop the function execution and return false
    } else {
        errname.innerHTML = "";
    }

    if (signnum === "" || isNaN(signnum) || signnum.length !== 10) {
        errnumber.innerHTML = "Please enter a valid 10-digit number";
        return false;
    } else {
        errnumber.innerHTML = "";
    }

    if (signemail === "" || !signemail.includes("@") || !signemail.includes(".com")) {
        erremail.innerHTML = "Please enter a valid email";
        return false;
    } else {
        erremail.innerHTML = "";
    }

    if (signpass.length < 6) {
        errpass.innerHTML = "Password must be at least 6 characters long";
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
        errpass.innerHTML = "Password must be no, symbol, upper & lowercase letters";
        return false;
    } else {
        errpass.innerHTML= "";
    }

    if (signcpass !== signpass) {
        errcpass.innerHTML = "Passwords do not match";
        return false;
    } else {
        errcpass.innerHTML = "";
    }

    

    localStorage.setItem("name", signname)
    localStorage.setItem("email", signemail)
    localStorage.setItem("number", signnum)
    localStorage.setItem("password", signpass)

    alert("Sign up Successful! Redirecting to login page...");
    location.href="login.html";
    return false;       // to not refresh page

}

let login=()=>{
    let loginname=document.querySelector("#loginname").value
    let loginpass=document.querySelector("#loginpass").value

    let localname=localStorage.getItem("name")
    let localpass=localStorage.getItem("password")

    if(loginname===localname && loginpass===localpass){
        location.href="home.html";

    }else {
        alert("invalid Name or Password")
    }
    return false;
};


let logout=()=>{
    // localStorage.clear()
    localStorage.removeItem("#password")
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
