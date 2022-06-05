import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Index';
import Home from './components/Home/Index'
import './App.css';
import { GlobalStyles } from './components/Global.styles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='home' element={<Home />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
