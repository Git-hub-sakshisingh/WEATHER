var inputValue=document.querySelector('#cityinput');
var btn= document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var desc= document.querySelector('#description');
var temp=document.querySelector('#temp');
var wind=document.querySelector('#wind');
apik="137f0dd4eecccb27041a0f71d8b19001";
function conversion(val){
    return(val-273).toFixed(3);
}

btn.addEventListener('click',function()
{
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+'&appid='+apik)
    .then(res=> res.json())

    .then(data =>
    {
        var nameval = data['name']
        var descp=data['weather']['0']['description']
        var temperature=data['main']['temp']
        var windspeed=data['wind']['speed']

        city.innerHTML=`Weather of <span>${nameval}</span>`
        temp.innerHTML=`Temperature: <span>${conversion(temperature)}C</span>`
        desc.innerHTML=`Sky Conditions: <span>${descp}</span>`
        wind.innerHTML=`Wind Speed: <span>${windspeed} km/h</span>`
    }
    )
    .catch(err => alert('You entered Wrong city name'))
}
)