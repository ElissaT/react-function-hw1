import React from "react";

class Add5 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      sum: ""
    };
  }

  onChange = event => {
    this.setState({
      input: Number(event.target.value)
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      sum: this.state.input + 5,
      input: ""
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "black" }}>{this.state.sum}</h1>
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
            Add 5
          </button>
        </form>
      </div>
    );
  }
}

export default Add5;
