const updateClock = () =>{
    let date = new Date()
    /*let day = document.getElementById('day')
    day.textContent = date.getDate()
    let month = document.getElementById('month')
    month.textContent = date.getMonth()
    let year = document.getElementById('year')
    year.textContent = date.getFullYear()
    let hour = document.getElementById('hour')
    hour.textContent = date.getHours()
    let min = document.getElementById('min')
    min.textContent = date.getMinutes()
    let sec = document.getElementById('sec')
    sec.textContent = beforeZero(date.getSeconds())*/

    
    let space = document.getElementById('date_time')
    space.innerHTML = `${beforeZero(date.getDate())} - ${monthName[date.getMonth()]} - ${date.getFullYear()} &nbsp &nbsp ${beforeZero(date.getHours())} : ${beforeZero(date.getMinutes())} : ${beforeZero(date.getSeconds())} : ${beforeZero(date.getMilliseconds())}`
}

const beforeZero = (elem) =>{
    if (elem.toString().length == 1) {
        elem = '0' + elem;
    }
    return elem
}

let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

updateClock()
setInterval(updateClock,1)