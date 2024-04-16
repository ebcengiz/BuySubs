import './App.css'
import Box from './components/box/Box'
import TextBox from './components/text-box/TextBox'

function App() {
  

  return (
    <>
        <div className='app'>
          <TextBox />
          <Box />
          <button className='app-btn'>See all subscriptions</button>
        </div>
    </>
  )
}

export default App
