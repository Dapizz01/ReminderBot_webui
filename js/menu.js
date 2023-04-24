const shortReminderToggle = document.getElementById("shortReminder")
const dateReminderToggle = document.getElementById("dateReminder")

const timeOffsetContainer = document.getElementById("timeOffsetContainer")
const dateTimeContainer = document.getElementById("dateTimeContainer")

shortReminderToggle.onclick = () => {
    shortReminderToggle.classList.add("tab-active")
    dateReminderToggle.classList.remove("tab-active")

    timeOffsetContainer.style.display = "block"
    dateTimeContainer.style.display = "none"
}


dateReminderToggle.onclick = () => {
    dateReminderToggle.classList.add("tab-active")
    shortReminderToggle.classList.remove("tab-active")

    dateTimeContainer.style.display = "block"
    timeOffsetContainer.style.display = "none"
}