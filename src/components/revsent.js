import React from "react";

class RevSent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      rev: ""
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
      rev: this.state.input
        .split(" ")
        .reverse()
        .join(" "),
      input: ""
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "black" }}>{this.state.rev}</h1>
        <form onSubmit={this.onSubmit}>
          <input
            style={{
              outline: "none",
              background: "#ebebe0",
              border: "1px solid transparent",
              borderRadius: "3px",
              color: "black"
            }}
            placeholder="enter string"
            type="text"
            value={this.state.input}
            onChange={this.onChange}
          />
          <br />
          <button
            type="submit"
            style={{
              marginTop: "10px",
              color: "white",
              background: "#ff8080",
              outline: "none",
              border: "1px solid transparent",
              borderRadius: "5px"
            }}
          >
            Reverse
          </button>
        </form>
      </div>
    );
  }
}

export default RevSent;
