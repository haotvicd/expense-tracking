import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from 'DataContext';

const HomePage = () => {
  const { income, expense } = useContext(DataContext);
  const totalExpense = expense.length === 0 ? 0 : '-' + expense.reduce((sum, cur) => sum + parseInt(cur.price), 0)
  const balance = income - Math.abs(parseInt(totalExpense));
  return (
    <>
      <div className="box homepage">
        <Link to='/' className='btn btn-success mb-2'>Back</Link>
        <hr />
        <div className="income">Income: <span className='fs-3 text-success'>{income} VNĐ</span></div>
        <div className="balance">Balance: <span className='fs-3 text-primary'>{balance} VNĐ</span></div>
        <div className="expense">Expense: <span className='fs-3 text-danger'>{totalExpense} VNĐ</span></div>
        <hr />

        <div className="transaction">
          {expense && expense.map(ex => (
            <div className="transaction__item" key={ex.id}>
              <div className="transaction__item-name">{ex.name}</div>
              <div className="transaction__item-price">
                <span className='fs-5'>-{ex.price} VNĐ</span>
                <small className='text-secondary text-end'>{ex.createdAt}</small>
              </div>
            </div>
          ))}
          {expense.length === 0 && (
            <div className='expense-none'>Expense is empty</div>
          )}
        </div>
        <hr />
        <Link to='/add' className='btn btn-primary w-100'>Add expense</Link>
      </div>
    </>
  )
}

export default HomePage;