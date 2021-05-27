import React from "react";
import "./App.css";
import { InputLabel, MenuItem, Select } from "@material-ui/core";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="text-welcome">
          <div className="text one">
            <h1>HEY, LET'S PLAY A GAME, HOW MUCH QUESTIONS CAN YOU ANSWER?</h1>
          </div>

          <div className="text two">
            <h2>CHOOSE HOW MANY QUESTIONS DO YOU WANNA ANSWER</h2>
          </div>
        </div>

        <div className="selecter">
          <InputLabel id="select-label">Questions</InputLabel>
          <Select labelId="select-label" className="select">
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
            <MenuItem>3</MenuItem>
            <MenuItem>4</MenuItem>
            <MenuItem>5</MenuItem>
            <MenuItem>6</MenuItem>
            <MenuItem>7</MenuItem>
            <MenuItem>8</MenuItem>
            <MenuItem>9</MenuItem>
            <MenuItem>10</MenuItem>
          </Select>
        </div>
      </div>
    </>
  );
}

export default App;
