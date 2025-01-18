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
            <div>${e.People}</div>
            <div>${e.Price}</div> 
            <div>${e.People*e.Price}</div> 
            <div>${e.id}</div> 
            <div onclick="del('${e.id}')" class="cancel-button"><span>Cancel</span></div>
        </div> `
    })
}

let del =(id)=>{
    let url = `http://localhost:3000/appointment/${id}`
    fetch(url, {method: "DELETE"})
}


let appointmet=()=>{
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
  // let errMessage = document.querySelector("#errMessage");

    if (fullname === '') {
      errName.innerHTML = 'Please enter your full name';
      return false;
    } else {
      errName.innerHTML = '';
    }
    if (phone === "" || isNaN(phone) || phone.length !== 10) {
      errPhone.innerHTML = "Please enter a valid 10-digit number";
      return false;
  } else {
      errPhone.innerHTML = "";
  }
    if (age === "" || isNaN(age)) {
      errAge.innerHTML = "Please enter a valid Age";
      return false;
  } else {
      errPhone.innerHTML = "";
  }

    // Treatment Validation
    if (treatment === '') {
      errTreatment.innerHTML = 'Please select a treatment';
      return false;
    } else {
      errTreatment.innerHTML = '';
    }

    // Date Validation
    if (date === '') {
      errDate.innerHTML = 'Please select an appointment date';
      return false;
    } else {
      errDate.innerHTML = '';
    }

    // Time Validation
    if (time === '') {
      errTime.innerHTML = 'Please select an appointment time';
      return false;
    } else {
      errTime.innerHTML = '';
    }

    
  localStorage.setItem("Name", fullname)
  localStorage.setItem("Phone", phone)
  localStorage.setItem("Age", age)
  localStorage.setItem("Treatment", treatment)
  localStorage.setItem("Date", date)
  localStorage.setItem("Time", time)
  // localStorage.setItem("Message", message)




    // let url = 'http://localhost:3000/appointment'
    // fetch(url, {
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //   body:JSON.stringify(
    //     {
    //       Name:fullname,
    //       Phone:phone,
    //       Age:age,
    //       Treatment:treatment,
    //       Date:date,
    //       Time:time,
    //       People:people,
    //       Price:price
    //     }
    //   )
    // })


    alert("Sign up Successful! Redirecting to login page...");
  location.href="crud.html";
  return false;       // to not refresh page
  }