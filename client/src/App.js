import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './App.css';
import Home from './pages/Home/home'
function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
