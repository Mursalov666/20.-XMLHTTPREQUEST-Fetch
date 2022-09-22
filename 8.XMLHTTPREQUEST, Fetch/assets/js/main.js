const setQuery = (e) => {
    if (e.keyCode=='13'){ 
        getResault(searchBar.value);
    }

};

const getResault = (cityName) =>{
   if (cityName==""){
       alert("Сity name cannot be empty ! ! !")
   }
   let query = `${'https://api.openweathermap.org/data/2.5/'}weather?q=${cityName}&appid=${'aee9368ab4b3e538bec75d39005eccf3'}&units=metric&lang=az`;
   fetch(query)
   .then(weather => {
       return weather.json();
   })
   .then(displayResult);

};
const displayResult= (result) =>{
let city = document.querySelector('.city');
city.innerText = `${result.name},${result.sys.country}`;

let temp = document.querySelector('.temp');
temp.innerText = `${Math.round(result.main.temp)}°C `;

let desc = document.querySelector('.desc');
desc.innerText = result.weather[0].description;
};



const searchBar = document.querySelector('#searchBar');
searchBar.addEventListener('keypress' , setQuery);