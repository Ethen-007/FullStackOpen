import { useState } from "react";

const Display = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total ? (good - bad) / total : 0;
  const positivePercentage = total ? (good / total) * 100 : 0;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="average" value={average.toFixed(2)} />
        <StatisticLine
          text="positive"
          value={`${positivePercentage.toFixed(2)}%`}
        />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodCount = () => setGood(good + 1);
  const neutralCount = () => setNeutral(neutral + 1);
  const badCount = () => setBad(bad + 1);

  return (
    <div>
      <Display text="give feedback" />
      <Button onClick={goodCount} text="good" />
      <Button onClick={neutralCount} text="neutral" />
      <Button onClick={badCount} text="bad" />
      <Display text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
