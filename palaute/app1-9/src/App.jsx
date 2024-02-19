import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }
  const handleTotal = () => {
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
  
    </div>
  )
}

const Statistics = ({ good, neutral, bad, total }) => {
  return (
    <div>
      {total > 0 ? (
        <>
          
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {total}</p>
          <p>average {(good - bad) / total}</p>
          <p>positive {(good / total) * 100} %</p>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App