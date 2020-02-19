import React from "react";
import ExampleFunctionalComponent from "./ExampleFunctionalComponent.js";
import AnotherClassComponent from "./AnotherClassComponent";
class ExampleClassComponent extends React.Component {
  state = {
    displayMessage: false,
    message: ""
  };

  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {
    // debugger;
    return true;
  }

  componentDidUpdate() {
    // debugger;
    console.log("component updated");
  }

  toggleMessage = () => {
    this.setState({
      displayMessage: !this.state.displayMessage,
      message: "new Message"
    });
  };

  render() {
    return (
      <div>
        <div onClick={this.toggleMessage}>Display Message?</div>
        {this.state.displayMessage && (
          <ExampleFunctionalComponent message={"test message"} />
        )}
        <AnotherClassComponent message={this.state.message} />
      </div>
    );
  }
}

export default ExampleClassComponent;
