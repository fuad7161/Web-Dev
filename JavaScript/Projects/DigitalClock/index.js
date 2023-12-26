function updateTime(){
    const now = new Date()
    const hours = now.getHours().toString().padStart(2,'0');
    const minute = now.getMinutes().toString().padStart(2,'0');
    const second = now.getSeconds().toString().padStart(2,'0');
    const timeString = `${hours}:${minute}:${second}`
    document.getElementById('time').textContent = timeString

    // Analog clock rotation
    const hourRotation = (360 / 12)*(now.getHours()%12) + (360/12)*(now.getMinutes()/60);
    const minuteRotation = (360 / 60)*now.getMinutes() + (360/60)*(now.getSeconds()/60);
    const secondRotation = (360/60)*now.getSeconds();
    // console.log(hourRotation , minuteRotation , secondRotation);
    document.getElementById('hour').style.transform = `rotate(${hourRotation}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteRotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${secondRotation}deg)`;
}

setInterval(updateTime , 1000);
updateTime();