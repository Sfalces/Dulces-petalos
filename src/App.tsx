import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Header } from './Header/Header'
import { Home } from './Home'
import { FlowerDetails } from './FlowerDetails'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flowerDetails/:id" element={<FlowerDetails />} />
      </Routes>
    </>
  )
}

export default App
