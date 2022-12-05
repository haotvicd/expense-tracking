import './App.scss'

function App() {

  const handleChange = (value) => {
    console.log(value);
  }

  return (
    <div className='homePage'>
      <h1>Expense Tracking</h1>
      <input className='form-control' type="number" placeholder='nhập số tiền cần quản lí' onChange={(event) => handleChange(event.target.value)} />
      <button className='btn btn-secondary mt-3'>Save</button>
    </div>
  );
}

export default App;
