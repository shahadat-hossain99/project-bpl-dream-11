import React from "react";

import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({ playersData }) => {
  //   console.log(playersData);
  return (
    <div className="container mx-auto w-11/12 ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {playersData.map((players) => (
          <PlayerCard key={players.id} players={players} />
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
