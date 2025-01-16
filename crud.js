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
            <div>${e.treatment}</div>
            <div>${e.date}</div>
            <div>${e.Time}</div>
            <div>${e.Price}</div>
        </div> `
    })
}