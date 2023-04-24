import './App.css'

function App() {

  const mainButton = window.Telegram.WebApp.MainButton;
  mainButton.text = "Save Preferences";
  mainButton.enable();
  mainButton.show();

  return (
    <>
      <div className="tabs tabs-boxed">
        <a className="tab">Tab 1</a> 
        <a className="tab tab-active">Tab 2</a> 
        <a className="tab">Tab 3</a>
      </div>
      <input type="time" name="" id="" />
    </>
  )
}

export default App
