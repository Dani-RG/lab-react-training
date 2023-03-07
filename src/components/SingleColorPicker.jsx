import { useState } from "react";

const SingleColorPicker = ({ color, value, onChange }) => {

  const [colorVal, setColorVal] = useState(0);

  const handleColorValue = (e) => {
    setColorVal(e.target.value)
    onChange(colorVal)
  };

  return (
    <div>
        <div className="rgbBox" style={{backgroundColor: color === "r" ? "red" : color === "g" ? "green" : "blue"}}> </div>
        <label>{color.toUpperCase()}</label>
        <input type="number" value={value} placeholder="Number from 0 to 255" onChange={handleColorValue}></input>
    </div>
  )
}

// WHY DO I HAVE TO WRITE EACH DIGIT TWICE TO WRITE ONE DIGIT OF THE NUMBER ?

export default SingleColorPicker;