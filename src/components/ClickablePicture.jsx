import { useState } from "react";

const ClickablePicture = ({ img, imgClicked }) => {
  
  const [picture, setPicture] = useState(img);

  const handleToggle = () => {
      if (picture === img) {
        setPicture(imgClicked)
      } else {
        setPicture(img)
      }
  }

  return (
    <div>
      <img onClick={handleToggle} src={picture} width='100px' alt='some-pic'/>
    </div>
  )
}

export default ClickablePicture;