let getMyLocation = () => {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(getWeatherApi)
    }
    
    else{

        alert("oops! we are sorry")
    }
}

let apiKey = "d3bee4a160642465c2500b63ceacb3c9"

let basedUrl = "https://api.openweathermap.org/data/2.5/weather"
// // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


let getWeatherApi = (position) => {

    fetch(`${basedUrl}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`)

    .then((res) => res.json())
    .then ((data) => {
        let para = document.getElementById("wind")
        let name = document.getElementById("name")
        let image = document.getElementById("img")
    wind.innerText = "Wind :" + " "+ JSON.stringify(data.wind.speed)
    name.innerText = "City :" + " " + (data.name)
    // image.getAttribute = ( src, JSON.stringify(data.weather[0].icon));
    image.src= ` http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
    
    
    })
}

getMyLocation()


// Data types 
// Object, Arrays and Functions 
// Variables
// Scope 
// call-backs
// Different btw OO and  FP

// var joeBiden = "usa president"

// function country() {
//     var joeBiden = "ng president"
//     let buhari = "Mr president";
//     wizkid = "hip-hop artist";

// }


// console.log(joeBiden)
// console.log(buhari)





































