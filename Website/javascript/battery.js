const batteryLevel = document.querySelector('.battery-level');
console.log(batteryLevel);

navigator.getBattery().then(function(battery){
    const level = battery.level;
    const statuss = level * 100;
    const status = level * 100 + "%";
    //console.log(status);
    //console.log(statuss);

    if (statuss <= 20 ){
        batteryLevel.style.background = "rgb(255, 0, 0)";
    } else if (statuss > 20 && statuss <= 40){
        batteryLevel.style.background = "rgb(255, 127, 0)";
    }else if (statuss > 40 && statuss <= 60){
        batteryLevel.style.background = "rgb(255, 255, 0)";
    }else if (statuss > 60 && statuss <= 80){
        batteryLevel.style.background = "rgb(127, 255, 0)";
    }else{
        batteryLevel.style.background = "rgb(0, 255, 0)";
    }

    batteryLevel.style.width = status;
    batteryLevel.innerHTML = status;
})