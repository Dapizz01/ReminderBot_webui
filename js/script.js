const mainButton = window.Telegram.WebApp.MainButton;
const timeInput = document.getElementById("timeOffsetInput");
const descInput = document.getElementById("reminderDesc");
mainButton.text = "Set reminder";
mainButton.enable();
mainButton.show();

mainButton.onClick(() => {
    if(timeInput.value != null){
        window.Telegram.WebApp.sendData(JSON.stringify({
            "time": timeInput.value,
            "desc": descInput.value
        }))
    }
})