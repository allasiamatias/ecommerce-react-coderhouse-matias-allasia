import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting ={'Bienvenidos a "La Bodega"'}/> } />  
        <Route path='/categoria/:catParam' element={ <ItemListContainer/> } />  
        <Route path='/detalle/:idParam' element={ <ItemDetailContainer /> } />
        <Route path='*' element= {<div> <h2>Error 404: No encontramos resultados</h2> </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
