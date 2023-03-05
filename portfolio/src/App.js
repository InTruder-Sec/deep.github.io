import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Index from './components/index';
import Projects from './components/projects';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}




export default App;
