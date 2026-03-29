import { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import Players from "./Components/Players/Players";

const fetchPlayers = async () => {
  const res = await fetch("/PlayerInfoData.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Suspense
          fallback={
            <span className="$$loading $$loading-bars $$loading-xl"></span>
          }
        >
          <Players playersPromise={playersPromise} />
        </Suspense>
      </main>
    </>
  );
}

export default App;
