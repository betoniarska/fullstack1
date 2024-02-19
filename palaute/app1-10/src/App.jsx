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
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
  
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad, total }) => {
  return (
    <div>
      {total > 0 ? (
        <> 
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={(good - bad) / total} />
        <StatisticLine text="positive" value={(good / total) * 100 + " %"} />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App