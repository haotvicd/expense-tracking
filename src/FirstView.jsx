import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FirstView = () => {
  const [value, setValue] = useState(0)
  const navigator = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!value) return;

    navigator('/homepage');
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Expense Tracking</h1>
      <input className='form-control' type="number" placeholder='nhập số tiền cần quản lí' onChange={handleChange} />
      <button className='btn btn-secondary mt-3'>Save</button>
    </form>
  )
}

export default FirstView;