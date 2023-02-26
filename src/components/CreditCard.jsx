import masterCard from "../assets/images/master-card.png";
import visa from "../assets/images/visa.png";

const CreditCard = (props) => {

  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;

  const creditCardStyle = {
    backgroundColor: `${bgColor}`,
    color: `${color}`
  };

  const lastFourDigits = number.slice(-4);

  let cardType 
        if (type === "Visa"){
            cardType = visa;
        } else if (type === "Master Card"){
            cardType = masterCard;
        }

  return (
    <div className="credit-card" style={creditCardStyle}>
      <img src={cardType} width="100px" alt="card type" />
      <h2>•••• •••• •••• {lastFourDigits}</h2>
      <p>Expires {expirationMonth}/{expirationYear}</p>
      <p>{bank}</p>
      <p>{owner}</p>
    </div>
  )
}

export default CreditCard;