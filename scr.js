
      let grid = document.getElementById("grid");
      let nav1 = document.getElementById("a1");
      let nav2 = document.getElementById("a2");
      let nav3 = document.getElementById("a3");
      let nav4 = document.getElementById("a4");

 function openNav1(){ 
    nav1.classList.add("active");
    nav4.classList.remove("active");
    nav2.classList.remove("active");
    nav3.classList.remove("active");
}
function openNav2(){ 
    nav2.classList.add("active");
    nav1.classList.remove("active");
    nav4.classList.remove("active");
    nav3.classList.remove("active");
}
function openNav3(){ 
    nav3.classList.add("active");
    nav1.classList.remove("active");
    nav2.classList.remove("active");
    nav4.classList.remove("active");
}
function openNav4(){ 
    nav4.classList.add("active");
    nav1.classList.remove("active");
    nav2.classList.remove("active");
    nav3.classList.remove("active");
}

 const getLoction = () => {
    if(navigator.geolocation.getCurrentPosition){
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
    else
    {
        alert("This dvice dose not suport the future.");
    }
 };

 const showPosition = (position) =>{
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    const des = document.querySelector("p");
     des.innerHTML = `Latitude : ${lat} <br> Longitude : ${long}`;
    console.log(lat,long);
}

const showError = (error) => {
    switch(error.code){
        case error.PERRMISSOIN_DENIED:
            alert("PERRMISSOIN DENIED");
            break;

        case error.POSITION_UNAVAILABLE:
            alert("POSITION UNAVAILABLE");
            break;
            
            case error.TIMEOUT:
            alert("TIMEOUT");
            break;

            case error.UNKNOWN_ERROR:
            alert("UNKNOWN ERROR");
            break;
    }
}