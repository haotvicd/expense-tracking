import AddExpense from 'components/AddExpense';
import FirstView from 'pages/FirstView';
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { DataProvider } from 'contexts/DataContext';
import HomePage from 'pages/HomePage';
import EditExpense from 'components/EditExpense';
import AddIncome from 'components/AddIncome';

function App() {
  return (
    <div className='app'>
      <DataProvider>
        <Routes>
          <Route path="/" element={<FirstView />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/add" element={<AddExpense />} />
          <Route path="/edit" element={<EditExpense />} />
          <Route path="/add-income" element={<AddIncome />} />
        </Routes>
      </DataProvider>
    </div>

  );
}

export default App;
