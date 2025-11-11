import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router'
import { CartContextProvider } from './context/cartContext'
import CartContainer from './components/CartContainer/CartContainer'

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes Routes>
          <Route path='/' element={ <ItemListContainer greeting ={'Bienvenidos a "La Bodega"'}/> } />  
          <Route path='/categoria/:catParam' element={ <ItemListContainer/> } />  
          <Route path='/detalle/:idParam' element={ <ItemDetailContainer /> } />
          <Route path='/cart' element= { <CartContainer /> } />
          <Route path='*' element= {<div> <h2>Error 404: No encontramos resultados</h2> </div>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}


export default App
