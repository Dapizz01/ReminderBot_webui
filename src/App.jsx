import React from 'react'
import DateInput from './components/DateInput.jsx'
import TimeInput from './components/TimeInput.jsx'
import './App.css'

function App() {
  const [selectedTab, setSelectedTab] = React.useState(0)

  const mainButton = window.Telegram.WebApp.MainButton
  mainButton.text = "Save reminder"
  mainButton.enable()
  mainButton.show()

  return (
    <>
      <div className="tabs tabs-boxed flex items-center justify-center">
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
        {selectedTab == 0 && <TimeInput />}
        {selectedTab == 1 && <DateInput />}

        <input type="text" placeholder="Reminder note (optional)" className="input input-bordered input-primary w-full max-w-xs" />
      </div>
    </>
  )
}

export default App
