import React from 'react'

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="income">Income: <span className='fs-3'>33 VNĐ</span></div>
      <div className="balance">Balance: <span className='fs-3'>0 VNĐ</span></div>
      <div className="expense">Expense: <span className='fs-3'>0 VNĐ</span></div>

      <div className="transaction">
        <div className="transaction__item">
          <div className="transaction__item-name">Shopping</div>
          <div className="transaction__item-price">
            <span>10 VNĐ</span>
            <small className='fst-italic fw-lighter'>Yesterday</small>
          </div>
        </div>
        <div className="transaction__item">
          <div className="transaction__item-name">Food</div>
          <div className="transaction__item-price">
            <span>10 VNĐ</span>
            <small className='fst-italic fw-lighter'>2022/12/10</small>
          </div>
        </div>
        <div className="transaction__item">
          <div className="transaction__item-name">Travel</div>
          <div className="transaction__item-price">
            <span>10 VNĐ</span>
            <small className='fst-italic fw-lighter'>2021/12/01</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;