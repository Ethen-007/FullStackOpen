import { useState } from "react";

const Display = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total ? (good - bad) / total : 0;
  const positivePercentage = total ? (good / total) * 100 : 0;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>average {average.toFixed(2)}</p>
      <p>positive {positivePercentage.toFixed(2)}%</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodCount = () => {
    setGood(good + 1);
  };

  const neutralCount = () => {
    setNeutral(neutral + 1);
  };

  const badCount = () => {
    setBad(bad + 1);
  };

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
