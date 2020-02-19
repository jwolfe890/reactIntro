import React from "react";

class AnotherClassComponent extends React.Component {
  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {
    debugger;
    return true;
  }

  render() {
    return <div>{this.props.message}</div>;
  }
}

export default AnotherClassComponent;
