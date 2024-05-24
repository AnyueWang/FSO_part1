import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({ text, value }) => (
  <tr>
    <th>{text}</th>
    <td>{value}</td>
  </tr>)

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad
  return sum === 0 ? (<p>No feedback given</p>) :
    (<table>
      <tbody>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={sum} />
        <StatisticLine text='average' value={(good - bad) / sum} />
        <StatisticLine text='positive' value={`${good / sum * 100} %`} />
      </tbody>
    </table>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <Button onClick={() => setGood(good + 1)} text='good' />
        <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button onClick={() => setBad(bad + 1)} text='bad' />
      </div>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App