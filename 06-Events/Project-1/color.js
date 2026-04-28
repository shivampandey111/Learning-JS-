const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'

    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let color;
const startChanging = function(){
    if(!color){
        color = setInterval(start, 1000) 
    }
    function start(){document.body.style.backgroundColor = randomColor()}
    /*
    function start(){document.body.style.backgroundColor = randomColor()}
    color = setInterval(start, 1000)                This stops the changing when the stop is clicked once but it is necessary to check if any previous intervals are already running
    */
}
const stopChanging = function(){
    clearInterval(color)
    color = null
}
document.querySelector('#start').addEventListener('click', startChanging)
document.querySelector('#stop').addEventListener('click', stopChanging)