import './App.css'
import Banner from './components/Banner'
import CarePatient from './components/CarePatient'
import NavBar from './components/NavBar'

function App() {
  

  return (
    <div className='inter max-w-6xl mx-auto'>
      <NavBar></NavBar>
      <Banner></Banner>
      <CarePatient></CarePatient>
    </div>
  )
}

export default App
