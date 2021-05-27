import { Button } from "@material-ui/core";
import React from "react";
import "./index.css";
function Questions() {
  const apiUrl = "https://opentdb.com/api.php?amount=20&category=9";

  const fetchApi = fetch(apiUrl);
  fetchApi
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);
    })
    .catch((er) => {
      console.log(er);
    });

  return (
    <>
      <div className="main-container-questions">
        <div className="question">
          <h1 id="question">Here is show the Question </h1>
        </div>

        <div className="list-answer">
          <div className="btn">
            <Button className="btn-anwser" variant="contained" color="primary">
              Primary
            </Button>
          </div>

          <div className="btn">
            <Button className="btn-anwser" variant="contained" color="primary">
              Primary
            </Button>
          </div>

          <div className="btn">
            <Button className="btn-anwser" variant="contained" color="primary">
              Primary
            </Button>
          </div>

          <div className="btn">
            <Button className="btn-anwser" variant="contained" color="primary">
              Primary
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Questions;
