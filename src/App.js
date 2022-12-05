import FirstView from 'FirstView';
import HomePage from 'HomePage';
import { Route, Routes } from 'react-router-dom'
import './App.scss'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<FirstView />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </div>

  );
}

export default App;
