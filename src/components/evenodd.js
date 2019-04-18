import React from "react";

class EvenOdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  onChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      input: ""
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "black" }}>
          {this.state.input % 2 === 0 ? "Even" : "Odd"}
        </h1>
        <form onSubmit={this.onSubmit}>
          <input
            style={{
              outline: "none",
              background: "#ebebe0",
              border: "1px solid transparent",
              borderRadius: "3px",
              color: "black"
            }}
            placeholder="enter number"
            type="text"
            value={this.state.input}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default EvenOdd;
