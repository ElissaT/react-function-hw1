import React from "react";

class FirstLast extends React.Component {
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

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "black" }}>
          {this.state.input
            .split("")
            .slice(1, -1)
            .join("")}
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
            placeholder="enter stuff"
            type="text"
            value={this.state.input}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default FirstLast;
