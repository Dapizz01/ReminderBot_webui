const mainButton = window.Telegram.WebApp.MainButton;
const timeInput = document.getElementById("timeOffsetInput");
const descInput = document.getElementById("reminderDesc");
mainButton.text = "Set reminder";
mainButton.enable();
mainButton.show();

mainButton.onClick(() => {
    if(timeInput.value != null){
        let time_offset = 0
        let times = timeInput.value.split(":")

        time_offset = times[0] * 60 + times[1]

        window.Telegram.WebApp.sendData(JSON.stringify({
            "time": time_offset,
            "desc": descInput.value
        }))
    }
})