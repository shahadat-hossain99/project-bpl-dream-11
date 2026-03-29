import React from "react";
import { use } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";

const Players = ({ playersPromise }) => {
  //   console.log(playersPromise);
  const playersData = use(playersPromise);
  //   console.log(playersData);
  return (
    <div className="container mx-auto w-11/12 ">
      <h4>Players: {playersData.length}</h4>

      <AvailablePlayers playersData={playersData} />
    </div>
  );
};

export default Players;
