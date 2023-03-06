import { useState } from "react";

const LikeButton = () => {
  
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleIncrease}>{`${count} likes`}</button>
    </div>
  )
}

export default LikeButton;