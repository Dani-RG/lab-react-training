import { useState } from "react"

const Carousel = ({ images }) => {

  const [pictureIndex, setPictureIndex] = useState(0);

  const handleLeft = () => {
    setPictureIndex(prev => prev + 1)
    if (pictureIndex >= (images.length -1) ) {
      setPictureIndex(0)
    }
  }

  const handleRight = () => {
    setPictureIndex(prev => prev - 1)
    if (pictureIndex <= 0 ) {
      setPictureIndex(images.length -1)
    }
  }

  return (
    <div>
      <img src={`${images[pictureIndex]}`} width='100px' alt='some-pic' />
      <button onClick={handleLeft}>Left</button>
      <button onClick={handleRight}>Right</button>
    </div>
  )
}

export default Carousel;