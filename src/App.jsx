import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import Players from "./Components/Players/Players";
import { ToastContainer } from "react-toastify";

const fetchPlayers = async () => {
  const res = await fetch("/PlayerInfoData.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();
  const [coin, setCoin] = useState("50000");

  return (
    <>
      <header>
        <Navbar coin={coin}></Navbar>
      </header>
      <main>
        <Suspense
          fallback={
            <span className="$$loading $$loading-bars $$loading-xl"></span>
          }
        >
          <Players
            setCoin={setCoin}
            coin={coin}
            playersPromise={playersPromise}
          />
        </Suspense>

        {/* React Toastify */}

        <ToastContainer />
      </main>
    </>
  );
}

export default App;
