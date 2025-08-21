import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}

      <button onClick={function () {
        setCount(count + 1)
      }}>click</button>
    </div>
  )
}

export default App
