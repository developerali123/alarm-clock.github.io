var clock=document.getElementById("clock");
        var setbtn=document.getElementById("setbtn");
        var clearbtn=document.getElementById("clearbtn");
        var audio=document.createElement("audio");
        var local=document.getElementById("local");
        var alarmTime;
        audio.src="Alarm-clock-bell-ringing-sound-effect.mp3";
        audio.loop=true;
        function showdate(){
            var date=new Date();
            local.innerHTML=date.toDateString();
        var hours=date.getHours();
        var minutes=date.getMinutes();
        var seconds=date.getSeconds();
        var session="AM";
        if(hours==0){
            hours=12;
        }
        if(hours>=12){
            hours=hours-12;
            session="PM";
        }
        if(hours<10){
            hours="0"+hours;
        }
        if(minutes<10){
            minutes="0"+minutes;
        }
        if(seconds<10){
            seconds="0"+seconds;
        }
        clock.innerHTML=hours+" : "+minutes+" : "+seconds+" "+session;
    }
    function setAlarmTime(value) {
    alarmTime = value;
    }
    setInterval(showdate,1000);
    setbtn.addEventListener("click",function(){
        if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert('Alarm set');
        }
    }
    })
    clearbtn.addEventListener("click",function(){
        audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');

    }
    })
    showdate();