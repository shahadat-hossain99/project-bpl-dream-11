import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const SelectedPlayers = ({ SelectedPlayer }) => {
  console.log(SelectedPlayer);
  return (
    <div>
      {SelectedPlayer.map((player, ind) => {
        return (
          <div
            key={ind}
            className="flex justify-between items-center p-10 rounded-2xl border mb-5"
          >
            <div className="flex justify-between items-center gap-5">
              <img
                className="h-22 rounded-full"
                src={player.playerImage}
                alt=""
              />
              <div>
                <h2 className="font-bold text-lg flex justify-between items-center gap-2">
                  <FaRegUser /> {player.playerName}
                </h2>
                <p>{player.playerType}</p>
              </div>
            </div>
            <button className="btn text-red-600 text-xl">
              {" "}
              <MdDelete />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedPlayers;
