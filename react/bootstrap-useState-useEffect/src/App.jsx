import { useState } from "react";
import Counter from "./Components/Counter/Counter";
import ChangeText from "./Components/ChangeText/ChangeText";
import Users from "./Components/users/users";


function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello World");

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }
  return (
    <>
      <div className="container">
        <Counter count={count} increment={increment} decrement={decrement} />
        <ChangeText text={text} setText={setText} />
        <Users />
      </div>
    </>
  )
}

export default App
