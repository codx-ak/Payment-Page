import React from 'react'
import Card from './Card'

const CardForm = () => {
  
  return (
    <>
    <div className="card-form">
    <div className="card-list">
      <Card/>
    </div>
    <div className="card-form__inner">

      <div className="card-input">
        <label htmlFor="cardNumber" className="card-input__label">Card Number</label>
        <input
          type="tel"
          id="cardNumber"
          className="card-input__input"
          maxLength={16}
          data-card-field
          autoComplete="true"
        />
      </div>

      <div className="card-input">
        <label htmlFor="cardName" className="card-input__label">Card Holders</label>
        <input
          type="text"
          id="cardName"
          maxLength={15}
          className="card-input__input"
          data-card-field
          autoComplete='true'
        />
      </div>
      
      <div className="card-form__row">
        <div className="card-form__col">
          <div className="card-form__group">
            <label htmlFor="cardMonth" className="card-input__label">Expiration Date</label>
            <select
              className="card-input__input -select"
              id="cardMonth"
              data-card-field
              defaultValue={0}
            >
              <option disabled value={0}>Month</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                
            </select>

            <select
              className="card-input__input -select"
              id="cardYear"
              data-card-field
              defaultValue={1}
            >
              <option disabled value={1} >Year</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
              <option value="2031">2031</option>
            </select>

          </div>
        </div>

        <div className="card-form__col -cvv">
          <div className="card-input">
            <label htmlFor="cardCvv" className="card-input__label">CVV</label>
            <input
              type="tel"
              className="card-input__input"
              maxLength={3}
              id="cardCvv"
              data-card-field
              autoComplete="true"
            />
          </div>
        </div>
      </div>

      <button className="card-form__button">Submit</button>
    </div>
  </div>
    </>
  )
}

export default CardForm