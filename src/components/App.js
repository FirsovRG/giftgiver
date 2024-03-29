import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Gift from "./Gift";
import { max_number } from "../helper";

class App extends Component {
  state = {
    gifts: []
  };

  addGift = () => {
    const { gifts } = this.state;
    const ids = this.state.gifts.map(gift => gift.id);
    const max_id = max_number(ids);

    gifts.push({ id: max_id + 1 });

    this.setState({ gifts });
  };

  removeGift = id => {
    this.setState({ gifts: this.state.gifts.filter(gift => gift.id !== id) });
  };

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {this.state.gifts.map(gift => {
            return (
              <Gift key={gift.id} gift={gift} removeGift={this.removeGift} />
            );
          })}
        </div>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    );
  }
}

export default App;
