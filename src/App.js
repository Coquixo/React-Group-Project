import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Componentes a importar
import Home from './containers/Home/Home'
import Header from './components/Header/Header'


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />

        <Routes>

          <Route path='/' element={<Home />} />


        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App;
