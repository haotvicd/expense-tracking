import AddExpense from 'AddExpense';
import FirstView from 'FirstView';
import HomePage from 'HomePage';
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { DataProvider } from 'DataContext';

function App() {
  return (
    <div className='app'>
      <DataProvider>
        <Routes>
          <Route path="/" element={<FirstView />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/add" element={<AddExpense />} />
        </Routes>
      </DataProvider>
    </div>

  );
}

export default App;
