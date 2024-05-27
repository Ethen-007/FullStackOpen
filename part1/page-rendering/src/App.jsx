import { useState } from "react";

const App = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const [allClicks, setAll] = useState([]);
  const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right, //each time the state has to be changed or the copy has to be specified
    };
    setClicks(newClicks);
    setAll(allClicks.concat("L"));
  };
  const handleRightClick = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1,
    };
    setClicks(newClicks);
    setAll(allClicks.concat("R"));
  };
  return (
    <>
      {clicks.left};<button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
      <p>{allClicks.join(" ")}</p>
    </>
  );
};

export default App;

// const Display = ({ counter }) => <div>{counter}</div>;
// const Button = ({ onSmash, text }) => <button onClick={onSmash}>{text}</button>;

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const increaseByOne = () => setCounter(counter + 1);
//   const setToZero = () => setCounter(0);
//   const decreaseByone = () => setCounter(counter - 1);

//   return (
//     <>
//       <Display counter={counter} />
//       <Button onSmash={increaseByOne} text="plus" />
//       <Button onSmash={setToZero} text="zero" />
//       <Button onSmash={decreaseByone} text="minus" />
//     </>
//   );
// };
