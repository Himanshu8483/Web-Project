let fetchData= async()=>{
    let url= 'http://localhost:3000/appointment';
    let res= await fetch(url, {method:"GET"})
    let data= await res.json()
    console.log(data);

    let show=document.querySelector("#display")
    data.map((e)=>{
        show.innerHTML+= `
        <div class="row">
            <div>${e.Name}</div>
            <div>${e.Age}</div>
            <div>${e.Phone}</div>
            <div>${e.Treatment}</div>
            <div>${e.Date}</div>
            <div>${e.Time}</div>
            <div>${e.Price}</div>       
            <div onclick="condel('${e.id}')" class="cancel-button">Cancel</div>
            <div onclick="formFill('${e.id}')" class="cancel-button" id="edit">Edit</div>
        </div> `
    })
}
    // auto made in json: e.id
    //We can perform operation: e.People*e.Price

    
let del =(id)=>{
    let url = `http://localhost:3000/appointment/${id}`
    fetch(url, {method: "DELETE"})
}

// alert script library 
let condel=(id)=>{
  Swal.fire({
    title: "Are you sure?",
    text: "This cannot be undone, proceed carefully!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    
  }).then((result) => {
    if (result.isConfirmed) {
      del(id)
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
}

let appointment=()=>{
    let fullname = document.getElementById('fullname').value;
    let phone = document.getElementById('phone').value;
    let age = document.getElementById('age').value;
    let treatment = document.getElementById('treatment').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    // let message = document.getElementById('message').value;

  let errName = document.querySelector("#errName");
  let errPhone = document.querySelector("#errPhone");
  let errAge = document.querySelector("#errAge");
  let errTreatment = document.querySelector("#errTreatment");
  let errDate = document.querySelector("#errDate");
  let errTime = document.querySelector("#errTime");

    if (fullname === '') {
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
      errName.innerHTML = 'Please enter your full name';
      return false;
    } else {
      errName.innerHTML = '';
    }
    if (phone === "" || isNaN(phone) || phone.length !== 10) {
      Swal.fire({
        position: "top-end",
        title: "Invalid!",
        icon: "error",
        text: "Please enter your Phone Number",
        customClass: {
            popup: 'swal2-popup-custom'
        },
        timer: 3000,
        showConfirmButton: false,
    });
      errPhone.innerHTML = "Please enter a valid 10-digit number";
      return false;
  } else {
      errPhone.innerHTML = "";
  }
    if (age === "" || isNaN(age)) {
      Swal.fire({
        position: "top-end",
        title: "Invalid!",
        icon: "error",
        text: "Please enter your Age",
        customClass: {
            popup: 'swal2-popup-custom'
        },
        timer: 3000,
        showConfirmButton: false,
    });
      errAge.innerHTML = "Please enter a valid Age";
      return false;
  } else {
      errAge.innerHTML = "";
  }

    // Treatment Validation
    if (treatment === '') {
      Swal.fire({
        position: "top-end",
        title: "Invalid!",
        icon: "error",
        text: "Please Select your Problem",
        customClass: {
            popup: 'swal2-popup-custom'
        },
        timer: 3000,
        showConfirmButton: false,
    });
      errTreatment.innerHTML = 'Please select a treatment';
      return false;
    } else {
      errTreatment.innerHTML = '';
    }

    // Date Validation
    if (date === '') {
      Swal.fire({
        position: "top-end",
        title: "Invalid!",
        icon: "error",
        text: "Please select an appointment date",
        customClass: {
            popup: 'swal2-popup-custom'
        },
        timer: 3000,
        showConfirmButton: false,
    });
      errDate.innerHTML = 'Please select an appointment date';
      return false;
    } else {
      errDate.innerHTML = '';
    }

    // Time Validation
    if (time === '') {
      Swal.fire({
        position: "top-end",
        title: "Invalid!",
        icon: "error",
        text: "Please enter an appointment time",
        customClass: {
            popup: 'swal2-popup-custom'
        },
        timer: 3000,
        showConfirmButton: false,
    });
      errTime.innerHTML = 'Please select an appointment time';
      return false;
    } else {
      errTime.innerHTML = '';
    }
      Swal.fire({
        position: "top-end",
        title: "Form Submitted Successfully!",
        icon: "success",
        text: "Redirecting to the Submitted form Section",
        customClass: {
            popup: 'swal2-popup-custom'
        },
        timer: 3000,
        showConfirmButton: false,
    });
    
  localStorage.setItem("Name", fullname)
  localStorage.setItem("Phone", phone)
  localStorage.setItem("Age", age)
  localStorage.setItem("Treatment", treatment)
  localStorage.setItem("Date", date)
  localStorage.setItem("Time", time)
  // localStorage.setItem("Message", message)

    let url = 'http://localhost:3000/appointment'
     fetch(url, {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(
        {
          Name:fullname,
          Phone:phone,
          Age:age,
          Treatment:treatment,
          Date:date,
          Time:time,
          Price:250
        }),
    });
    
    // alert("Sign up Successful! Redirecting to login page...");
  location.href="crud.html";
  return false;       // to not refresh page
  };

  let formFill= async(id)=> {
    let url = `http://localhost:3000/appointment/${id}`

    let res = await fetch(url,{method:"GET"})
    let data = await res.json()
    let formData=`
            <div class="group">
          <label for="fullname">Full Name</label>
          <input type="text" value="${data.Name}" id="upname" placeholder="Enter your name">
          <p id="errName" class="error"></p>
        </div>

        <div class="group">
          <label for="phone">Phone Number</label>
          <input type="text" value="${data.Phone}" id="upphone" placeholder="10-digit number">
          <p id="errPhone" class="error"></p>
        </div>
        <div class="group">
          <label for="age">Age</label>
          <input type="number" value="${data.Age}" id="upage" placeholder="Enter Age">
          <p id="errAge" class="error"></p>
        </div>

        <div class="group">
          <label for="treatment">Treatment</label>
          <select id="treatment">
            <option value="">Choose Treatment</option>
            <option value="General Checkup">General Checkup</option>
            <option value="Dental Care">Dental Care</option>
            <option value="Eye Checkup">Eye Checkup</option>
            <option value="Skin Treatment">Skin Treatment</option>
            <option value="Physiotherapy">Physiotherapy</option>
            <option value="Other">Other</option>
          </select>
          <p id="errTreatment" class="error"></p>
        </div>

        <div class="group">
          <label for="date">Date:</label>
          <input type="date" value="${data.Date}" id="update">
          <p id="errDate" class="error"></p>
        </div>

        <div class="group">
          <label for="time">Time:</label>
          <input type="time" value="${data.Time}" id="uptime">
          <p id="errTime" class="error"></p>
        </div>

        <input type="submit" class="button" value="Book Appointment" onclick="return FinalUpdate('${data.id}')">
    `
    document.querySelector("#Formdisplay").innerHTML=formData
  }

  let FinalUpdate=(id)=>{
    let nname = document.getElementById('upname').value;
    let pphone = document.getElementById('upphone').value;
    let aage = document.getElementById('upage').value;
    let ttreatment = document.getElementById('treatment').value;
    let ddate = document.getElementById('update').value;
    let ttime = document.getElementById('uptime').value;
    let url = `http://localhost:3000/appointment/${id}`

    fetch(url,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(
        {
          Name:nname,
          Phone:pphone,
          Age:aage,
          Treatment:ttreatment,
          Date:ddate,
          Time:ttime,
          Price:250
        }
      )
    })
    return false;
  }