import { DataContext } from "contexts/DataContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const FirstView = () => {
  const [value, setValue] = useState(0)
  const navigator = useNavigate();
  const { income, setIncome } = useContext(DataContext);

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!value) return;
    setIncome(JSON.parse(localStorage.getItem('income')))
    navigator('/homepage');
  }

  const handleChange = (e) => {
    setValue(e.target.value);
    localStorage.setItem('income', JSON.stringify(e.target.value));
  }

  // const handleCancel = () => {
  //   navigator('/homepage');
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Expense Tracking</h1>
      <input className='form-control' type="number" placeholder='nhập số tiền cần quản lí' required onChange={handleChange} />
      <button className='btn btn-success w-100 mt-3'>Save</button>
      {/* {income > 0 && (
        <>
          <p className="mt-3">Số tiền hiện tại: <small>{income}</small></p>
          <div className="wrap-button">
            <button className='btn btn-secondary' onClick={handleCancel}>Cancel</button>
            <button className='btn btn-success'>Update</button>
          </div>
        </>
      )} */}
    </form>
  )
}

export default FirstView;