import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import About from './pages/About';
import MainHeader from './components/MainHeader';


function App() {
 console.log("app")

  return (
    <div>
      <MainHeader />
      <div className="App">
        <div className="main-photo"></div>
        <div className="wrapper-info-for-tenants container">
          <h5 className="info-for-tenants">Сдаются в аренду помещения от 15 до 300 м.кв. По вопросам аренды обращайтесь по тел. <a class="phone-number" href='tel:+375297908981'>8 (029) 7908981</a></h5></div>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
