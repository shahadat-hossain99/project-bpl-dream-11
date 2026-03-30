import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import SelectedCard from "./SelectedCard";

const SelectedPlayers = ({
  SelectedPlayer,
  setSelectedPlayer,
  setCoin,
  coin,
}) => {
  console.log(SelectedPlayer);

  const handleDeleteSelectedPlayer = (player) => {
    console.log(player, "player");
    const filteredPlayers = SelectedPlayer.filter(
      (selectPlayer) => selectPlayer.playerName !== player.playerName,
    );
    console.log(filteredPlayers);
    setSelectedPlayer(filteredPlayers);
    setCoin(coin + player.price);
  };

  return (
    <div>
      {SelectedPlayer.length === 0 ? (
        <div className="text-center  flex items-center justify-center flex-col gap-4 h-87.5">
          <h2 className="text-4xl font-semibold opacity-70">
            No player Selected Yet
          </h2>
          <p className="text-lg font-medium opacity-80">
            Go to Available Tab to select Player
          </p>
        </div>
      ) : (
        SelectedPlayer.map((player, ind) => {
          return (
            <SelectedCard
              player={player}
              key={ind}
              handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
            />
          );
        })
      )}
    </div>
  );
};

export default SelectedPlayers;
