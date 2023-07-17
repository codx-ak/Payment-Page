import React from 'react'
import CARD_TYPES from './CardType'
import chip from'../assets/images/chip.png'

const Card = ({values}) => {
  const{cardNumber,expMonth,expYear,userName,cardCvv,rotateCard,cardType}=values
  let cardNumberChange=String(cardNumber)   
  let cardNumberSplit=cardNumberChange.substring(0,4)+" "+cardNumberChange.substring(4,8)+" "+
                      cardNumberChange.substring(8,12)+" "+cardNumberChange.substring(12,)
  
  return (
    <>
    <div className={`${rotateCard ?'card-item -active':'card-item'}`}>
    <div className="card-item__side -front">
      
      <div className="card-item__cover">
        <img
          src={CARD_TYPES[cardType].color}
          className="card-item__bg"
          alt='background'
        />
      </div>
      <div className="card-item__wrapper">
        <div className="card-item__top">
          <img
            src={chip}
            className="card-item__chip"
            alt='chip'
          />
          <div className="card-item__type">
              <img
                src={CARD_TYPES[cardType].name}
                alt="card Type"
                className="card-item__typeImg"
              />
          </div>
        </div>
        <label htmlFor="cardNumber" className="card-item__number" >
            <span>
              <div name="slide-fade-up">
                <div className="card-item__numberItem">{cardNumber?cardNumberSplit:"#### #### #### ####"}</div>
              </div>
            </span>
        </label>

        <div className="card-item__content">
          <label htmlFor="cardName" className="card-item__info" >
            <div className="card-item__holder">Card Holder</div>
            <div name="slide-fade-up">
              <div className="card-item__name" >
                <div name="slide-fade-right">
                  <span>{userName?userName:"Full Name"}</span>
                </div>
              </div>
            </div>
          </label>

          <div className="card-item__date" >
            <label htmlFor="cardMonth" className="card-item__dateTitle">Expires</label>
            <label htmlFor="cardMonth" className="card-item__dateItem">
              <div name="slide-fade-up">
                <span>{expMonth?expMonth:"MM"}</span>
              </div>
            </label>
            /
            <label htmlFor="cardYear" className="card-item__dateItem">
              <div name="slide-fade-up">
                <span>{expYear?expYear:"YY"}</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div className="card-item__side -back">
      <div className="card-item__cover">
        <img
          src={CARD_TYPES[cardType].color}
          className="card-item__bg"
          alt='background'
        />
      </div>
      <div className="card-item__band"></div>
      <div className="card-item__cvv">
        <div className="card-item__cvvTitle">CVV</div>
        <div className="card-item__cvvBand">
          <span>{cardCvv?cardCvv:"0000"}</span>
        </div>
        <div className="card-item__type">
          <img
            src={CARD_TYPES[cardType].name}
           alt='card Type'
            className="card-item__typeImg"
          />
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Card