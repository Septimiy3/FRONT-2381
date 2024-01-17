let clickText = document.querySelector(".textAll")
let btn = document.querySelector('.btnClick')
btn.addEventListener('click', ()=> {
    clickText.style.color = 'green'
})

// let url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=0707fc33b05c862d2ba87d8e6a905f86';
let response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=0707fc33b05c862d2ba87d8e6a905f86')
.then(result => result.json)
.then(body => console.log(body));
