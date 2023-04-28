import React from 'react'
import DateInput from './components/DateInput.jsx'
import TimeInput from './components/TimeInput.jsx'
import './App.css'

function App() {
  const [selectedTab, setSelectedTab] = React.useState(0)
  const [time, setTime] = React.useState(0)
  const [date, setDate] = React.useState(0)
  const [message, setMessage] = React.useState("")

  const mainButton = window.Telegram.WebApp.MainButton
  mainButton.text = "Save reminder"
  mainButton.enable()
  mainButton.show()

  mainButton.onClick(() => {
    if(selectedTab == 0){ // Time
      if(time != null){
        let times = time.split(":")

        window.Telegram.WebApp.sendData(JSON.stringify({
          "type": "time",
          "hours": int(times[0]),
          "minutes": int(times[1]),
          "message": document.getElementById("note").value // yeah, not really the best...
        }))
      }
    }
    else{ // Date
    }
  })

  return (
    <>
      <div className="tabs tabs-boxed bg-base-100 flex items-center justify-center">
        <a className={"tab " + (selectedTab == 0 ? "tab-active" : "")} onClick={(e) => {
          e.preventDefault()
          setSelectedTab(0)
        }}>
          Time
        </a> 
        <a className={"tab " + (selectedTab == 1 ? "tab-active" : "")} onClick={(e) => {
          e.preventDefault()
          setSelectedTab(1)
        }}>
          Date
        </a> 
      </div>

      <div className='flex flex-col items-center justify-center'>
        {selectedTab == 0 && <TimeInput time={time} setTime={setTime}/>}
        {selectedTab == 1 && <DateInput date={date} setDate={setDate}/>}

        <input type="text" placeholder="Reminder note (optional)" 
          className="input input-bordered w-full max-w-xs" 
          id="note"
          onChange={(e) => {
            setMessage(e.target.value)
          }}/>
      </div>
    </>
  )
}

export default App
