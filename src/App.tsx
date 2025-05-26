import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Header } from './ui/Header/Header'
import { Home } from './ui/Home'
import { FlowerDetails } from './ui/FlowerDetails'

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
