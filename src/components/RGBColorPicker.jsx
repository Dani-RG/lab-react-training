import { useState } from "react";
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {

  const [rValue, setRedValue] = useState(0);
  const [gValue, setGreenValue] = useState(0);
  const [bValue, setBlueValue] = useState(0);

  const handleRedVal = (colorValue) => {
    setRedValue(colorValue)
  }

  const handleGreenVal = (colorValue) => {
    setGreenValue(colorValue)
  }

  const handleBlueVal = (colorValue) => {
    setBlueValue(colorValue)
  }

  return (
    <div>
    
      <SingleColorPicker 
        color="r"
        value={rValue}
        onChange={handleRedVal}
      />

      <SingleColorPicker 
        color="g"
        value={gValue}
        onChange={handleGreenVal}
      />

      <SingleColorPicker 
        color="b"
        value={bValue}
        onChange={handleBlueVal}
      />

      <h3>{`rgb(${rValue},${gValue},${bValue})`}</h3>
      <div className="rgbBox" style={{backgroundColor: `rgb(${rValue},${gValue},${bValue})`}}> </div>

    </div>
  )
}

export default RGBColorPicker;