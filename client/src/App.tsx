import './App.css'
import MusicHolder from './components/MusicHolder'
import MusicInfo from './components/MusicInfo'
import SFX from './components/SFX'

function App() {

  return (
    <main>
      <MusicHolder />
      <div className="right-container">
        <SFX />
        <MusicInfo />
      </div>
    </main>
  )
}

export default App
