import React, { Component } from 'react';
import { SwitchAndroid } from 'react-native';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {
      value: false,
    };
  }

  onValueChange(value) {
    this.setState({
      value,
    });
    if (this.props.onValueChange) {
      this.props.onValueChange(value);
    }
  }

  render() {
    return (
      <SwitchAndroid
        onValueChange={this.onValueChange}
        value={this.state.value}
      />
    );
  }
}

export default Switch;
