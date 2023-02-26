const Rating = (props) => {

  const { children } = props;

  let ratingNum = Math.round(children)

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
    <div className="rating-stars">
      <p>{stars}</p>
    </div>
  )
}

export default Rating;