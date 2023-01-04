import { useState } from "react";
import "./App.css";

function App() {
  const [isAdmin, setIsAdmin] = useState(0);
  const [wallet, setWallet] = useState(0);
  const [writeWallet, setWriteWallet] = useState(0);

  return (
    <div className="App">
      <div className="group">
        <input
          type="checkbox"
          onChange={(e) => {
            isAdmin === 1 ? setIsAdmin(0) : setIsAdmin(1);
          }}
        />
        <p>im admin? - {isAdmin}</p>
      </div>
      <div>Wallet: {wallet}</div>
      <hr />
      {isAdmin !== 1 && <div>Sorry you don't have permissions!</div>}
      {isAdmin == 1 && (
        <div>
          <input
            type="number"
            placeholder="Set wallet..."
            onChange={(e) => {
              setWriteWallet(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setWallet(writeWallet);
            }}
          >
            Set
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
