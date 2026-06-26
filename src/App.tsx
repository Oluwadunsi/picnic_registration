
import './App.css'
import Hero from './components/Hero'
import RegistrationForm from './components/RegistrationForm'

function App() {

  return (
    <> 
      <div className="flex flex-col sm:flex-row sm:min-h-screen shadow-lg bg-white">
        <Hero />
        <RegistrationForm />
      </div>
    </>
  )
}

export default App
