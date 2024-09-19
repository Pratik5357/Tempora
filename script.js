let API_KEY = "9155b61e49b1fc170c759b7874d15dc2";

let main = document.querySelector(".Info");
let btn = document.querySelector("#Search");

// btn.addEventListener("click",()=>{
//     main.style.display = "block";
// });


btn.addEventListener("click", () => {
    let city = document.querySelector('input').value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.cod === 200) {
                main.innerHTML = `
                    <h2 class="data-head">${data.name}, ${data.sys.country}</h2>
                    <span class="coord"><span class="data lon"><p>${data.coord.lon}</p><p>longitude</p></span><span class="data lat"><p>${data.coord.lat}</p><p>latitude</p></span></span>
                    <p class="data temp">${data.main.temp} °C</p>
                    <p class="data">Feels like: ${data.main.feels_like}°C</p>
                    <p class="data"> ${data.weather[0].description}</p>
                    <p class="data">humidity : ${data.main.humidity}</p>
                    <span class="temp2"><span class="data minT"><p>${data.main.temp_min}<i class="fa-solid fa-temperature-low"></i></p></span><span class="data maxT"><p>${data.main.temp_min}<i class="fa-solid fa-temperature-high"></i></p></span></span>
                    <p class="data wind">Wind : ${data.wind.speed}<i class="fa-solid fa-wind"></i></p>
                `;
                
                main.classList.add("show"); // Apply the show class to trigger transition
            } else {
                main.innerHTML = `<p>City not found. Please try again.</p>`;
                main.classList.add("show");
            }
        })
        .catch(error => console.log('Error:', error));  
    } else {
        main.innerHTML = `<p>Please enter a city name.</p>`;
        main.classList.add("show");
    }
});
