const DriverCard = (props) => {

  const { name, rating, img, car: { model, licensePlate } } = props;

  let ratingNum = Math.round(rating)

  let stars = "";

  switch (ratingNum){
    case 0:
      stars = "☆☆☆☆☆"
      break;
    case 1:
      stars = "★☆☆☆☆"
      break;
    case 2:
      stars = "★★☆☆☆"
      break; 
    case 3:
      stars = "★★★☆☆"
      break; 
    case 4:
      stars = "★★★★☆"
      break;
    case 5:
      stars = "★★★★★"
      break;
    default:
      stars = "Choose a number between 0 and 5"
  };

  return (
    <div className="driver-card">
      <h2>{name}</h2>
      <p>{stars}</p>
      <img src={img} width="100px" alt="driver-pic"/>
      <p>{model}-{licensePlate}</p>
    </div>
  )
}

export default DriverCard;