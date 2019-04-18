import React from "react";

class Pal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input1: "",
      input2: ""
    };
  }

  onChange = event => {
    this.setState({
      input1: event.target.value.replace(/\s/g, ""),
      input2: event.target.value
        .split("")
        .reverse()
        .join("")
        .replace(/\s/g, "")
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "black" }}>
          {this.state.input1 === this.state.input2
            ? "Palindrome"
            : "Not a palindrome"}
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
            placeholder="enter string"
            type="text"
            value={this.state.input}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default Pal;
