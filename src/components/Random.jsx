const Random = (props) => {

  const { min, max } = props;

  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
  const randomNum = getRandomInt(min, max)
  
  return (
    <div className="random-number">
      <p>Random value between {min} and {max} = {randomNum}</p>
    </div>
  )
}

export default Random;