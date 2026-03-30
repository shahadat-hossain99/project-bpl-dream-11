import React from "react";
import { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const PlayerCard = ({
  players,
  setCoin,
  coin,
  setSelectedPlayer,
  SelectedPlayer,
}) => {
  //   console.log(players);
  const [isSelected, setIsSelected] = useState(false);

  const handleChoosePlayer = () => {
    let newCoin = coin - players.price;
    if (newCoin >= 0) {
      setCoin(coin - players.price);
    } else {
      //   alert();
      toast.error(`Not enough coin to select ${players.playerName}`);
      return;
    }
    // alert(`${players.playerName} is selected`);
    toast.success(`${players.playerName} is selected`);

    setIsSelected(true);
    setSelectedPlayer([...SelectedPlayer, players]);
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={players.playerImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <FaUser /> {players.playerName}
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-2">
              <FaFlag />
              <p>{players.playerCountry}</p>
            </div>
            <button className="btn ">{players.playerType}</button>
          </div>

          <div className="divider"></div>

          <h2 className="font-bold">Rating: {players.rating}</h2>

          <div className="flex justify-center  gap-4 my-3">
            <p className="font-semibold">{players.battingStyle}</p>
            <p className="font-medium text-right">{players.bowlingStyle}</p>
          </div>

          <div className="card-actions justify-between items-center">
            <p className="font-bold">Price: ${players.price}</p>
            <button
              onClick={handleChoosePlayer}
              className="btn "
              disabled={isSelected ? true : false}
            >
              {isSelected === true ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
