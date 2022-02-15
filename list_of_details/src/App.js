import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  state = {
    Colornames: {
      Cricket: false,
      Chess: false,
      FootBall: false,
      Carrom: false,
      Tennis: false,
    },
  };

  CheckClick = (e) => {
    const { name, checked } = e.target;
    this.setState((e) => {
      const seletedSport = e.Colornames;
      return (seletedSport[name] = checked);
    });
  };
  render() {
    const displaySports = Object.keys(this.state.Colornames).filter(
      (f) => this.state.Colornames[f]
    );
    return (
      <div>
        <center>
          <h1>CheckBox</h1>
          <hr />
          <input type="checkbox" name="Cricket" onChange={this.CheckClick} />
          cricket
          <input type="checkbox" name="Chess" onChange={this.CheckClick} />
          Chess
          <input type="checkbox" name="FootBall" onChange={this.CheckClick} />
          FootBall
          <input type="checkbox" name="Carrom" onChange={this.CheckClick} />
          Carrom
          <input type="checkbox" name="Tennis" onChange={this.CheckClick} />
          Tennis
          <hr />
          <div>
            <strong>{displaySports + ""}</strong>
          </div>
        </center>
      </div>
    );
  }
}

export default App;
