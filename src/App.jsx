import { useState } from "react";
import Header from "./Components/Header";
function App() {
  const [budget, setBudget] = useState(0);

  return (
    <div>
      <Header budget={budget} setBudget={setBudget} />
    </div>
  );
}

export default App;
