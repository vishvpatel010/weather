const day = document.querySelector("#day");
const today_date = document.querySelector("#today_date");
const submitBtn = document.querySelector('#submitBtn');
const cityName = document.querySelector("#cityName");
const city_name = document.querySelector("#city_name");
const temp = document.querySelector("#tempdata");
const temp_status = document.querySelector("#temp_status");
const datahide = document.querySelector(".middle_layer");

const now = new Date();

let date = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
day.innerText= date[now.getDay()];

let mon = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];
today_date.innerText=`${now.getDate()} ${mon[now.getMonth()]}`;




const getInfo = async(event)=>{
    event.preventDefault(); 
    let cityVal = cityName.value;
    if(cityVal == ""){
        city_name.innerText = `Plz write the city name before search`;
        datahide.classList.add("data_hide");
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=32344f629879865ee264be3f83d64be7`;
            let response = await fetch(url);
            const data=await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;

            let tempMod = arrData[0].weather[0].main;
            
            if(tempMod == 'Clear')
                temp_status.innerHTML = `<img src="img/clear.png" alt="clear">`;
            else if(tempMod == 'Clouds')
                temp_status.innerHTML = `<img src="img/clouds.png" alt="clouds">`;
             else if(tempMod == "Drizzle")
                temp_status.innerHTML = `<img src="img/drizzle.png" alt="drizzle">`;
            else if(tempMod == 'Rain')
                temp_status.innerHTML = `<img src="img/rain.png" alt="rain">`;
            else if(tempMod == 'Snow')
                    temp_status.innerHTML = `<img src="img/snow.png" alt="snow">`;
            else if(tempMod == "Thunderstorm")
                temp_status.innerHTML = `<img src="img/thunderstorm.png" alt="thunderstorm">`;
            else
                temp_status.innerHTML = `<img src="img/clear.png" alt="clear">`;

            console.log(arrData);

            datahide.classList.remove("data_hide");
        }catch(e){
            city_name.innerText = `Plz enter the city name properly`;
            datahide.classList.add("data_hide");
        }
        
    }
    
};

submitBtn.addEventListener('click', getInfo);