btnAddJs = document.querySelector('.addJsBtn')
h2Js = document.querySelector('.h2Js')

btnAddJs.addEventListener('click', () => {
    alert('Данный скрипо подключён в index.js')
})
h2Js.addEventListener('click',()=> {
    h2Js.style.color = 'Orange'
    h2Js.style.fontSize = '20px'
})


