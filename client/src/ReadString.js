import React from "react";

class ReadString extends React.Component {
  state = { dataKey: null };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.MyStringStore;

    // Let Drizzle know we want to watch the 'myString' method
    const dataKey = contract.methods["myString"].cacheCall();

    // Save the 'dataKey' to local component state for later reference
    this.setState({ dataKey });
  }

  render() {
    // Get the contract state from drizzleState
    const { MyStringStore } = this.props.drizzleState.contracts;

    // Using the saved 'dataKey', get the variable we're interested in
    const myString = MyStringStore.myString[this.state.dataKey];

    // If it exists, then we will display its value
    return <p>My stored string: {myString && myString.value}</p>;
  }
}

export default ReadString;
