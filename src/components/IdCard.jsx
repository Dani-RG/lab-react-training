const IdCard = (props) => {

  const { lastName, firstName, gender, height, birth, picture } = props;
  
  return (
    <div className="id-card">
      <h4>First name: {firstName}</h4>
      <h4>Last name: {lastName}</h4>
      <h4>Gender: {gender}</h4>
      <h4>Height: {height}</h4>
      <h4>Birth: {birth.toDateString()}</h4>
      <img src={picture} width="100px" alt="profile-pic"/>
    </div>
  )
}

export default IdCard;