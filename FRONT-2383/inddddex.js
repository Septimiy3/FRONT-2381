btnAddJs = document.querySelector('.addJsBtn')
h2Js = document.querySelector('.h2Js')
test = document.querySelector('.test-btn')


btnAddJs.addEventListener('click', () => {
    alert('Данный скрипо подключён в index.js')
})
h2Js.addEventListener('click', () => {
    h2Js.style.color = 'Orange'
    h2Js.style.fontSize = '20px'
})
getDatas = async ()=> {
    let url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=0707fc33b05c862d2ba87d8e6a905f86';
    let response = await fetch(url)
    let data = await response.json().then((data) => {
        console.log(data)
        console.log(data.name)
        console.log(data.main)

        let arrs = ['sdadsa','sdasddsada','123123','dss','knbkjngdkb']
        console.log(arrs)
        arrs.forEach( data => {
            testik = document.querySelector('.test-select')
            let option = document.createElement('option')
            option.value = data
            option.innerText = data
            testik.appendChild(option)
        })

        // for (let [key, value] of Object.entries(arrs)) {
        //     testik = document.querySelector('.test-select')
        //     let option = document.createElement('option')
        //     console.log(`${key}:${value}`);
        //     option.value = key
        //     option.innerText = value
        //     testik.appendChild(option)
        // }
    })
}
test.addEventListener('click', () => {
    getDatas()
})

