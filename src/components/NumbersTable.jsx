const NumbersTable = ({ limit }) => {

  const numsArr = [...Array(limit).keys()].map(i => i+1)

  const listItems = numsArr.map((number) => (
    <li className={number % 2 === 0 ? 'red' : 'white'} key={number.toString()}>{number}</li>
  ))

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  )
}

export default NumbersTable;