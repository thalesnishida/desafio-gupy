import { Button } from "@material-ui/core";
import React from "react";
import "./index.css";

function PageButton() {
  return (
    <div className="main">
      <div className="main-button">
        <div className="btn">
          <Button variant="contained" color="primary">
            START
          </Button>
        </div>

        <div className="btn">
          <Button variant="contained" color="secondary">
            CANCEL
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PageButton;
