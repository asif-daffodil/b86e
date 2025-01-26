import useMyHook from "./Hooks/useMyHook"


function App() {
  const [msg, myLuckyNum] = useMyHook("Hello, World!")
  return (
    <>
      {msg}
      <br />
      {myLuckyNum}
    </>
  )
}

export default App
