// import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
// import Pricing from './pages/pricing'
import BurgerHome from './pages/home'

function App() {

  return (
    <>
    <ChakraProvider>
      {/* <Pricing /> */}
      <BurgerHome/>
    </ChakraProvider>
      
    </>
  )
}

export default App
