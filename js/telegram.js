const mainButton = window.Telegram.WebApp.MainButton;
const timeOffset = document.getElementById("timeOffsetInput");
const offsetText = document.getElementById("reminderDesc");
const dateTime = document.getElementById("dateTimeInput");
const dateTimeText = document.getElementById("dateTimeText");
mainButton.text = "Set reminder";
mainButton.enable();
mainButton.show();

mainButton.onClick(() => {
    if(shortReminderToggle.classList.contains("tab-active")){
        if(timeOffset.value != null){
            let seconds = 0
            let times = timeInput.value.split(":")

            seconds = times[0] * 3600 + times[1] * 60

            window.Telegram.WebApp.sendData(JSON.stringify({
                "time": seconds,
                "desc": offsetText.value
            }))
        }
    }

    else{
        if(dateTime.value != null){
            if(dateTime > new Date()){
                window.Telegram.WebApp.sendData(JSON.stringify({
                    "time": dateTime.value,
                    "desc": dateTimeText.value
                }))
            }
        }
    }
})