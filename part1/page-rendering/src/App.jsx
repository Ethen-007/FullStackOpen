import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  } //renders this when if statement is true else renders the following this is called conditional rendering
  return <div>button pressing history: {props.allClicks.join(" ")}</div>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
    // const updatedLeft = left + 1;
    // setLeft(updatedLeft);
    // setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
    // const updatedRight = right + 1;
    // setRight(updatedRight);
    // setTotal(left + updatedRight);
  };
  return (
    <>
      {left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
    </>
  );
};

export default App;

//const [clicks, setClicks] = useState({ left: 0, right: 0 });
// const [allClicks, setAll] = useState([]);
// const handleLeftClick = () => {
//   const newClicks = {
//     left: clicks.left + 1,
//     right: clicks.right, //each time the state has to be changed or the copy has to be specified
//   };
//   setClicks(newClicks);
//   setAll(allClicks.concat("L"));
// };
// const handleRightClick = () => {
//   const newClicks = {
//     left: clicks.left,
//     right: clicks.right + 1,
//   };
//   setClicks(newClicks);
//   setAll(allClicks.concat("R"));
// };
// return (
//   <>
//     {clicks.left};<button onClick={handleLeftClick}>left</button>
//     <button onClick={handleRightClick}>right</button>
//     {clicks.right}
//     <p>{allClicks.join(" ")}</p>
//   </>
// );

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
