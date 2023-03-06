import { useState } from 'react';

const FaceBook = ({ AllProfiles }) => {

  const [countryClicked, setCountryClicked] = useState('');

  const allCountries = AllProfiles.map(elem => {
    return elem.country;
  });

  const uniqueCountries = [...new Set(allCountries)];

  const handleCountryClicked = (country) => {
    setCountryClicked(country)
  }

  return (
    <div>
      <div>
        {uniqueCountries
        .map(elem => {
          return <button onClick={()=>handleCountryClicked(elem)} className={elem === countryClicked ? 'blue-bg' : 'white-bg'} key={elem}>{elem}</button>
        })}
      </div>

      {AllProfiles
      .map(elem => { 
        return <div onChange={()=>handleCountryClicked(elem.country)} className={elem.country === countryClicked ? 'blue-bg' : 'white-bg'} key={elem.img}>
            <img src={elem.img} width='100px' alt='profile-pic' />
            <p>First name: {elem.firstName}</p>
            <p>Last name: {elem.lastName}</p>
            <p>Country: {elem.country}</p>
            <p>Type: {elem.isStudent ? 'Student' : 'Teacher'}</p>
        </div>
      })}
    </div>
  )
}

export default FaceBook;