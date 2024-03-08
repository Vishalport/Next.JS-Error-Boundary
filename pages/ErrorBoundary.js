// ErrorBoundary.js
import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>Oops, There is an Error!</h2>1
          <p>{this.state.error.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}
