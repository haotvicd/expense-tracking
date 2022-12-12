import { DataContext } from "contexts/DataContext";
import useForm from "customHooks/useForm";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const formatDate = () => {
  const date = new Date();
  return date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();
}

const EditExpense = () => {
  const { state } = useLocation();
  const { setExpense } = useContext(DataContext);
  const navigate = useNavigate()

  const updateExpense = () => {
    const expense = { ...state, ...values, updatedAt: formatDate() };

    setExpense(prevExpense => {
      const newExpense = prevExpense.map(ex => {
        return ex.id === expense.id ? { ...ex, ...expense } : ex;
      });
      localStorage.setItem('expense', JSON.stringify(newExpense));
      return newExpense;
    });

    navigate('/homepage');
  }

  const [values, handleChange, handleSubmit] = useForm(updateExpense);

  return (
    <div className="box addForm">
      <Link to='/homepage' className='btn btn-success mb-2'>Back</Link>
      <hr />
      <h1>Edit Expense</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="">Name</label>
          <input type="text" name="name" onChange={handleChange} defaultValue={state.name} className="form-control" required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="">Price</label>
          <input type="number" name="price" onChange={handleChange} defaultValue={state.price} className="form-control" required />
        </div>
        <button className="btn btn-primary w-100">Update</button>
      </form>
    </div>
  )
}

export default EditExpense;