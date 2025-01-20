
let fetchData= async ()=>{

    try{
   let url='http://localhost:3000/car';
   
   let res= await fetch(url);    
   let data= await res.json()
   console.log(data);
      
   let output=document.querySelector("#display")
      data.map((e)=>{
        output.innerHTML+=` 
            <tr>
               <td>${e.carname}</td>
               <td>${e.carprice}</td>
               <td>${e.carcolor}</td>
               <td>${e.cartype}</td>
               <td>${e.carcity * e.carprice}</td>
               <td onclick="condel('${e.id}')">Delete</td>
               <td onclick="datafill('${e.id}')">Update</td>
        `
      })

       
    }
    catch(error){
        console.log("Error:-",error);
    }

}

let condel=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
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


  let datafill=async (id)=>{
     let d = await fetch(`http://localhost:3000/car/${id}`)
     let data = await d.json()
     let frmdata = `
     <form>
      <input type="text" value=${data.carname} id="cname1">  <br>
      <input type="text" value=${data.carprice} id="cprice1">  <br>
      <input type="text" value=${data.carcolor} id="ccolor1">  <br>
      <input type="text" value=${data.cartype} id="ctype1">  <br>
      <select id="ccity1">       
      <option value="1"> 1 </option>
       <option value="2">2</option>
       <option value="3">3</option>
       <option value="4">4</option>      
      </select> <br>
      <input type="submit" onclick="finalup('${data.id}')">
      </form>
     `
     document.getElementById('demo').innerHTML=frmdata
  }

  let finalup = (id) => {
    let cname1 = document.querySelector('#cname1').value
    let cprice1 = parseInt(document.querySelector('#cprice1').value)
    let ccolor1 = document.querySelector('#ccolor1').value
    let ctype1 = document.querySelector('#ctype1').value
    let ccity1 =parseInt( document.querySelector('#ccity1').value)

    fetch(`http://localhost:3000/car/${id}`,{
        method:'PUT',
        headers:{
            'Content-type' : 'application/json'
        },
        body:JSON.stringify({
            carname:cname1,
            carprice:cprice1,
            carcolor:ccolor1,
            cartype:ctype1,
            carcity:ccity1
        })
        
    })
  }


let del= async(id)=>{
     
    let url=`http://localhost:3000/car/${id}`
    let res= await fetch(url,{
        method:"DELETE"
    })
    let data= await res.json()
    console.log(data);
    

}


let ins= async()=>{
    let carname=document.querySelector("#name").value;
    let carprice=parseInt(document.querySelector("#price").value);
    let carcolor=document.querySelector("#color").value;
    let cartype=document.querySelector("#type").value;
    let carcity=parseInt(document.querySelector("#city").value);

    let url='http://localhost:3000/car';

    let res= await fetch(url,{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            carname:carname,
            carprice:carprice,
            carcolor:carcolor,
            cartype:cartype,
            carcity:carcity
        })
    })

    let data= await res.json()
    console.log(data);
    
    return false;

}