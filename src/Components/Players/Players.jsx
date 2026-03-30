import React from "react";
import { use } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import { useState } from "react";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, setCoin, coin }) => {
  //   console.log(playersPromise);
  const playersData = use(playersPromise);
  //   console.log(playersData);

  const [SelectedType, setSelectedType] = useState("available");

  // console.log(SelectedType, "SelectedType");

  const [SelectedPlayer, setSelectedPlayer] = useState([]);

  return (
    <div className="container mx-auto w-11/12 my-16">
      <div className="flex justify-between gap-4 items-center mb-5">
        {SelectedType === "available" ? (
          <h2 className="font-bold text-2xl ">Available Players</h2>
        ) : (
          <h2 className="font-bold text-2xl ">
            Selected Players ({SelectedPlayer.length}/{playersData.length})
          </h2>
        )}
        <div>
          <button
            onClick={() => {
              setSelectedType("available");
            }}
            className={`btn ${SelectedType === "available" ? "bg-accent" : "bg-neutral-100"} rounded-r-none rounded-l-lg`}
          >
            Available
          </button>
          <button
            onClick={() => {
              setSelectedType("selected");
            }}
            className={`btn ${SelectedType === "selected" ? "bg-accent" : "bg-neutral-100"} rounded-l-none rounded-r-lg`}
          >
            Selected ({SelectedPlayer.length})
          </button>
        </div>
      </div>

      {SelectedType === "available" ? (
        <AvailablePlayers
          playersData={playersData}
          SelectedPlayer={SelectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
          setCoin={setCoin}
          coin={coin}
        />
      ) : (
        <SelectedPlayers
          setSelectedPlayer={setSelectedPlayer}
          SelectedPlayer={SelectedPlayer}
          setCoin={setCoin}
          coin={coin}
        ></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
