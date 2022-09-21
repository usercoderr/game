import React from "react";
import { GameBuy } from "../game-buy";
import { GameCover } from "../game-cover";
import "./game-item.css";

export const GameItem = ({ game }) => {
  return (
    <div className="game-item">
      <GameCover image={game.image} />
      <div className="game-item_details">
        <span className="game-item_title">{game.title}</span>
        <div className="game-item_genre">
          {game.genres.map((genre) => genre)}
        </div>
        <div className="game-item_buy">
          <GameBuy game={game}/>
        </div>
      </div>
    </div>
  );
};
